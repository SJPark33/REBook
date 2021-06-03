package com.necessafy.rebook.Service;

import com.necessafy.rebook.model.book.Book;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookRecommendService {
    private final RestTemplate restTemplate;
    public BookRecommendService(RestTemplate restTemplate){ this.restTemplate = restTemplate; }
//
//    // Fall back
    public List<Book> getRecommendBooks(int i){
        try {
            List<Book> response = restTemplate.getForObject("http://j4b206.p.ssafy.io:8000/recommend/"+i+"/", List.class);
            return response;
        } catch (Exception e){
            ArrayList<Book> list = new ArrayList<Book>();
            return list;
        }
    }
////     Fall back
//    public int getRecommendBooks(){
//        try {
//            int response = restTemplate.getForObject("http://localhost:8000/books/", int.class);
//            System.out.println(response);
//            return response;
//        } catch (Exception e){
//            return 404404404;
//        }
//    }
}
