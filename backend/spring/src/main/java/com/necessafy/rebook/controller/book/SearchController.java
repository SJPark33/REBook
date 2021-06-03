package com.necessafy.rebook.controller.book;


import com.necessafy.rebook.dao.book.BookDao;
import com.necessafy.rebook.model.CommonResult;
import com.necessafy.rebook.model.book.Book;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/search")
public class SearchController {
//    BookService

    @Autowired
    BookDao bookDao;

    // 책 상세정보 반환
    @GetMapping("/search/{keyword}")
    @ApiOperation(value = "책 검색 결과를 반환한다.", response = CommonResult.class)
    public CommonResult searchBooks(@PathVariable String keyword){
//        BookResponse bookResponse = ;
        CommonResult commonResult = new CommonResult();
        List<Book> bookList = bookDao.findByTitleContaining(keyword);
        if(bookList.size() == 0){
            commonResult.status = false;
            commonResult.data = "검색어에 해당하는 책이 없습니다";
            commonResult.object = "";
            return commonResult;
        }
        commonResult.status = true;
        commonResult.data = "책 검색 결과 반환에 성공하였습니다.";
        commonResult.object = bookList;
        System.out.println(commonResult.data);
        System.out.println("hell"+commonResult.object + " 책 정보입니다!!");
        return commonResult;
    }
}
