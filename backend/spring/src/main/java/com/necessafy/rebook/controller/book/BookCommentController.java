package com.necessafy.rebook.controller.book;

import com.necessafy.rebook.Service.book.CommentService;
import com.necessafy.rebook.Service.jwt.JwtService;
import com.necessafy.rebook.dao.account.UserRebookDao;
import com.necessafy.rebook.dao.book.BookCommentDao;
import com.necessafy.rebook.dao.book.BookDao;
import com.necessafy.rebook.model.book.Book;
import com.necessafy.rebook.model.book.BookComment;
import com.necessafy.rebook.model.book.CommentRequest;
import com.necessafy.rebook.model.book.UpdateBookCommentRequest;
import com.necessafy.rebook.model.user.UserRebook;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import static com.necessafy.rebook.utils.HttpUtils.makeResponse;
import static com.necessafy.rebook.utils.HttpUtils.convertObjectToJson;
import java.util.Optional;

@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = { "http://localhost:8080", "https://j4b206.p.ssafy.io" })
public class BookCommentController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserRebookDao userRebookDao;
    @Autowired
    private CommentService commentService;
    @Autowired
    private BookDao bookDao;
    @Autowired
    private BookCommentDao bookCommentDao;

    @PostMapping
    @ApiOperation(value="리뷰 등록")
    public Object create(@RequestBody @ApiParam(value="리뷰 등록 시 필요한 정보(평점, 날짜, 내용) "
    ,required = true) CommentRequest commentRequest,HttpServletRequest httpServletRequest){
        System.out.println(commentRequest);
        Integer rating=commentRequest.getRating();
        String review=commentRequest.getReview().trim();
        String userEmail=commentRequest.getUserEmail().trim();
        String isbn=commentRequest.getIsbn().trim();
        String email = jwtService.getUserEmail(httpServletRequest.getHeader("Authorization"));

        Optional<UserRebook> curReUser=userRebookDao.findByEmail(userEmail); //이미 있는 정보
        Optional<Book> curBook=bookDao.findBookByIsbn(isbn);
        System.out.println(curReUser);
        System.out.println(curBook);
        Book book = new Book();
        if(curBook.isPresent()){
            Optional<BookComment> curComment=bookCommentDao.findByBookAndUserRebook(curBook.get(),curReUser.get());

            if(curComment.isPresent()) {
                return makeResponse("404",null,"review already exist", HttpStatus.BAD_REQUEST);
            }
            book = curBook.get();
        }else{
            book = bookDao.save(commentRequest.getBook());
        }

        ResponseEntity<?>result=commentService.checkBlankWenCreateComment(curReUser,review,rating,curBook);
        if (result!=null){
            return result;
        }
        BookComment bookComment=commentService.buildComment(rating,review,curReUser.get(),book);

        BookComment savedComment=bookCommentDao.save(bookComment);

        return makeResponse("200",convertObjectToJson(savedComment),"success", HttpStatus.OK);
    }
    @PutMapping
    @ApiOperation(value="리뷰 수정")
    public Object update(@Valid @RequestBody @ApiParam(value = "리뷰를 수정합니다.",required = true)
                                 UpdateBookCommentRequest updateBookCommentRequest, HttpServletRequest httpServletRequest){

        String email=updateBookCommentRequest.getEmail().trim();
        Integer rating=updateBookCommentRequest.getRating();
        String review=updateBookCommentRequest.getReview().trim();
        String isbn=updateBookCommentRequest.getIsbn().trim();

        Optional<UserRebook> curUserRebook=userRebookDao.findByEmail(email);
        Optional<Book> curBook=bookDao.findBookByIsbn(isbn);

        String jwtEmail=jwtService.getUserEmail(httpServletRequest.getHeader("Authorization"));

        Optional<BookComment> curBookComment=bookCommentDao.findByBookAndUserRebook(curBook.get(),curUserRebook.get());


        curBookComment.get().setRating(rating);
        curBookComment.get().setReview(review);
        curBookComment.get().setBook(curBook.get());
        curBookComment.get().setUserRebook(curUserRebook.get());
        BookComment bookCommentsaved=bookCommentDao.save(curBookComment.get());

        return makeResponse("200",convertObjectToJson(bookCommentsaved),"review update success",HttpStatus.OK);

    }



    @DeleteMapping("/{commendId}")
    @ApiOperation(value="리뷰 삭제")
    public Object delete(@Valid @ApiParam(value=" commendID 값으로 리뷰 삭제 ",required = true)@PathVariable String commendId,String email ,HttpServletRequest httpServletRequest){

        Optional<BookComment> curComment=bookCommentDao.findById(Long.parseLong(commendId));
        Optional<UserRebook> curReUser=userRebookDao.findByEmail(email);
        String userEmail=jwtService.getUserEmail(httpServletRequest.getHeader("Authorization"));
        if (curReUser.get().equals(userEmail)){
            return makeResponse("404", null, "user not found", HttpStatus.NOT_FOUND);
        }
        if (!curComment.isPresent()){
            return makeResponse("404",null,"review not found",HttpStatus.NOT_FOUND);
        }

        bookCommentDao.delete(curComment.get());
        return makeResponse("200",convertObjectToJson(curComment.get()),"success",HttpStatus.OK);


    }

    @GetMapping("/{email}")
    @ApiOperation(value="특정 유저가 특정 책에 쓴 코멘트 정보 검색")
    public Object search(@Valid @RequestBody @ApiParam(value="email로 특정 책 코멘트 정보 찾기",required =true) @PathVariable String email,String isbn){
        Optional<UserRebook> curReUser=userRebookDao.findByEmail(email);
        Optional<Book> curBook=bookDao.findById(isbn);
        System.out.println(curReUser);
        System.out.println(curBook);
        Optional<BookComment> curComment=bookCommentDao.findByBookAndUserRebook(curBook.get(),curReUser.get());

        System.out.println(curComment.get());
        return makeResponse("200",convertObjectToJson(curComment.get()),"success",HttpStatus.OK);
    }





}
