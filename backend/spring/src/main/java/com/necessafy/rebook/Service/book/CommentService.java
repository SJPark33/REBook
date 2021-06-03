package com.necessafy.rebook.Service.book;

import com.necessafy.rebook.model.book.Book;
import com.necessafy.rebook.model.book.BookComment;
import com.necessafy.rebook.model.user.UserRebook;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import static com.necessafy.rebook.utils.HttpUtils.makeResponse;

import java.util.Optional;

@Service
public class CommentService {

    public ResponseEntity<?> checkBlankWenCreateComment(Optional<UserRebook> userRebook, String review, Integer rating,Optional<Book> book) {
        if (!userRebook.isPresent()) {
            return makeResponse("400", null, "User Not found", HttpStatus.BAD_REQUEST);
        }

        if ("".equals(review) || rating == null) {
            return makeResponse("400", null, "data is blank", HttpStatus.BAD_REQUEST);
        }
        return null;

    }

    public BookComment buildComment(Integer rating, String review, UserRebook userRebook, Book book) {
        return BookComment.builder()
                .rating(rating)
                .review(review)
                .userRebook(userRebook)
                .book(book)
                .build();
    }


}
