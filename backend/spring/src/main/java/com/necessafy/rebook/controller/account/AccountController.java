package com.necessafy.rebook.controller.account;
import javax.servlet.http.HttpServletRequest;
import javax.swing.text.html.Option;
import javax.validation.Valid;


import com.necessafy.rebook.Service.account.AccountService;
import com.necessafy.rebook.Service.jwt.JwtService;
import com.necessafy.rebook.dao.account.UserRebookDao;
import com.necessafy.rebook.dao.book.BookCommentDao;
import com.necessafy.rebook.dao.book.BookDao;
import com.necessafy.rebook.model.book.Book;
import com.necessafy.rebook.model.book.BookComment;
import com.necessafy.rebook.model.user.*;

import com.necessafy.rebook.utils.SHA256Util;
import io.swagger.annotations.ApiParam;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import static com.necessafy.rebook.utils.HttpUtils.convertObjectToJson;
import static com.necessafy.rebook.utils.HttpUtils.makeResponse;


import io.swagger.annotations.ApiOperation;

import java.util.List;
import java.util.Optional;
//@CrossOrigin(origins = { "http://localhost:3000" })

@CrossOrigin(origins = { "http://localhost:8080", "https://j4b206.p.ssafy.io" })
@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private UserRebookDao userRebookDao;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private BookCommentDao bookCommentDao;

    @Autowired
    private BookDao bookDao;

    @PostMapping("/signup")
    @ApiOperation(value = "회원가입", notes = "이메일, 닉네임, 비밀번호를 입력합니다.")
    public Object signup(@Valid @RequestBody @ApiParam(value = "회원가입시 필요한 정보 (이메일, 별명, 비밀번호)"
            , required = true) SignupRequest request) {
        String email = request.getEmail().trim();
        String nickname = request.getNickname().trim();

        String salt = SHA256Util.generateSalt();
        String password = SHA256Util.getEncrypt(request.getPassword().trim(), salt);
        Object response = accountService.overlabAndBlankCheckWhenSignUp(email, nickname, password);

        System.out.println();
        if (response != null) {
            return response;
        }

        UserRebook user = accountService.buildUser(email, password, nickname, salt);

        UserRebook savedUser = userRebookDao.save(user);

        return makeResponse("200", convertObjectToJson(savedUser), "success", HttpStatus.OK);
    }

    @PostMapping("/login")
    @ApiOperation(value = "로그인", notes = "아이디와 비밀번호로 로그인을 합니다.")
    public Object login(
            @RequestBody @ApiParam(value = "로그인 시 필요한 회원정보 (아이디,비밀번호)", required = true)
                    AuthenticationRequest request) {

        String email = request.getEmail().trim();
        String beforePassword = request.getPassword().trim();
        String salt = userRebookDao.findByEmail(email).get().getSalt();
        String password = SHA256Util.getEncrypt(beforePassword, salt);

        Optional<UserRebook> curReUser = userRebookDao.findUserRebookByEmailAndPassword(email, password);

        //로그인 했을 떄 유저 정보 보내주기
        if (curReUser.isPresent()) {

            String token = jwtService.create("email", curReUser.get().getEmail(), "Authorization");

            AuthenticationResponse response = new AuthenticationResponse(curReUser.get(), token);
            return makeResponse("200", convertObjectToJson(response), "success", HttpStatus.OK);

        } else {
            return makeResponse("400", null, "fail login", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update")
    @ApiOperation(value = "회원 수정", notes = "회원 정보를 수정합니다.")
    public Object update(
            @Valid @RequestBody @ApiParam(value = "회원 정보 수정 (패스워드 , 닉네임) ", required = true) UpdateRequest request, HttpServletRequest httpServletRequest) {

        String email = jwtService.getUserEmail(httpServletRequest.getHeader("Authorization"));
        //System.out.println(email);
        //System.out.println(request.getEmail());
        if (!request.getEmail().equals(email)) {
            return makeResponse("404", null, "email is not match", HttpStatus.NOT_FOUND);
        } else {
            Optional<UserRebook> curReUser = userRebookDao.findByEmail(request.getEmail());
            String salt = curReUser.get().getSalt();
            if (!curReUser.isPresent()) {
                return makeResponse("404", null, "user not found", HttpStatus.NOT_FOUND);
            }
            String nickname = request.getNickname().trim();
            String password = request.getPassword().trim();
            String newPassword = request.getNewPassword().trim();

            password = SHA256Util.getEncrypt(password, salt);

            UserRebook updateUserRe = curReUser.get();
            //비밀번호랑 userRebook의 비밀번호가 같은지 확인
            if (!password.equals(updateUserRe.getPassword())) {
                return makeResponse("404", null, "password is not match", HttpStatus.NOT_FOUND);
            } else {
                newPassword = SHA256Util.getEncrypt(newPassword, salt);
                updateUserRe.setPassword(newPassword);
                updateUserRe.setNickname(nickname);
                userRebookDao.save(updateUserRe);

                return makeResponse("200", convertObjectToJson(updateUserRe), "success", HttpStatus.OK);
            }
        }
    }

    @DeleteMapping("/delete")
    @ApiOperation(value = "회원 삭제")
    public Object delete(
            @Valid @RequestBody @ApiParam(value = "회원정보 탈퇴 시 필요한 회원 정보(이메일, 비밀번호) ", required = true) AuthenticationRequest request,HttpServletRequest httpServletRequest) {
       String email=jwtService.getUserEmail(httpServletRequest.getHeader("Authorization")); //이메일 디코드
        if (!request.getEmail().equals(email)){
            return makeResponse("404",null,"email is not match",HttpStatus.NOT_FOUND);
        }else{
            Optional<UserRebook> curReUser=userRebookDao.findByEmail(email);
            if(!curReUser.isPresent()){
                return makeResponse("404",null,"user notfound",HttpStatus.NOT_FOUND);
            }
            String salt = curReUser.get().getSalt();
            String password=request.getPassword().trim();
            UserRebook userRebook=curReUser.get();
            password=SHA256Util.getEncrypt(password,salt);

            if (!password.equals(userRebook.getPassword())){
                return  makeResponse("404",null,"password is not match",HttpStatus.NOT_FOUND);
            }
            userRebookDao.delete(curReUser.get());

            return makeResponse("200",curReUser.get().getEmail(),"success",HttpStatus.OK);
        }
    }

    @GetMapping("/{email}")
    @ApiOperation(value="특정 user 검색 시 책정보 ,comment 반환")
    public Object search(@Valid @RequestBody @ApiParam(value = "email로 조회",required = true) @PathVariable String email){

        Optional<UserRebook> curReUser=userRebookDao.findByEmail(email);

        System.out.println(curReUser);
        List<BookComment> curComment=bookCommentDao.findByUserRebook(curReUser.get());
        System.out.println(curComment);


        return makeResponse("200",convertObjectToJson(curComment),"success",HttpStatus.OK);
    }



}