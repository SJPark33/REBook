package com.necessafy.rebook.Service.book;

import com.necessafy.rebook.model.book.Book;
import com.necessafy.rebook.model.book.UserReadStatus;
import com.necessafy.rebook.model.user.UserRebook;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static com.necessafy.rebook.utils.HttpUtils.makeResponse;

@Service
public class BookService {
    public ResponseEntity<?> checkBlankWenUserReadStatus(Optional<UserRebook> userRebook, Integer status) {
        if (!userRebook.isPresent()) {
            return makeResponse("400", null, "User Not found", HttpStatus.BAD_REQUEST);
        }

        if (status == null) {
            return makeResponse("400", null, "data is blank", HttpStatus.BAD_REQUEST);
        }
        return null;
    }

    public UserReadStatus buildStatus(Integer status,UserRebook userRebook,Book book){
        return UserReadStatus.builder()
                .status(status)
                .userRebook(userRebook)
                .book(book)
                .build();
    }
    public UserReadStatus buildStatuse(Integer status,String readStart,UserRebook userRebook,Book book){
        return UserReadStatus.builder()
                .status(status)
                .readStart(readStart)
                .userRebook(userRebook)
                .book(book)
                .build();
    }


}
