package com.necessafy.rebook.controller;

import com.necessafy.rebook.Service.BookRecommendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * 책 추천에 대한 요청을 보낼 컨트롤러 생성
 */
@RestController
public class BookRecommendController {
    @Autowired
    BookRecommendService bookService;

    @GetMapping("/recobooks/{email}")
    public Object getBooks(@PathVariable String email){
        return bookService.getRecommendBooks(1);
//        return getResult(bookService.getRecommendBooks(userId));
    }
}
