//package com.necessafy.rebook.controller;
//
//import com.necessafy.rebook.Service.post.PostsService;
//import com.necessafy.rebook.model.oauth.SessionUser;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//
//import javax.servlet.http.HttpSession;
//
//@RequiredArgsConstructor
//@Controller
//public class IndexController {
//    private final PostsService postsService;
//    private final HttpSession httpSession;
//
//    @GetMapping("/")
//    public String index(Model model) {
//        model.addAttribute("posts", postsService.findAllDesc());
//        // CustomOAuth2UserService에서 로그인 성공시 세션에 SessionUser를 저장
//        // 즉, 로그인 성공 시 httpSession.getAttribute("user")에서 값을 가져올 수 있다
//        SessionUser user = (SessionUser) httpSession.getAttribute("user");
//
//        // 세션에 값이 있을때만 model 에 userName 등록
//        if(user != null) {
//            model.addAttribute("userName", user.getName());
//        }
//        return "index";
//    }
//    @GetMapping("/posts-save/{username}")
//    public String postsSave(Model model ,@PathVariable String username) {
//        model.addAttribute("posts", postsService.findAllDesc());
//        SessionUser user = (SessionUser) httpSession.getAttribute("user");
//        if(user != null) {
//            model.addAttribute("userName", user.getName());
//        }
//        System.out.println("들어와썽~~!");
//        System.out.println(username);
//        return "posts-save";
//    }
//}
