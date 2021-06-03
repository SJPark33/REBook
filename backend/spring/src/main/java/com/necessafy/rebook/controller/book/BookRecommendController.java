//package com.necessafy.rebook.controller.book;
//
//import com.necessafy.rebook.Service.BookRecommendService;
//import com.necessafy.rebook.Service.ResponseService;
//import com.necessafy.rebook.model.CommonResult;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
///**
// * 책 추천에 대한 요청을 보낼 컨트롤러 생성
// */
//@RestController
//public class BookRecommendController {
//    private final BookRecommendService bookService;
//
//    @GetMapping("/recobooks/{email}")
//    public CommonResult getBooks(@PathVariable String user){
//        return responseService.getResult(bookService.getRecommendBooks(userId))
//    }
//}
