package com.necessafy.rebook.model.book;

import com.necessafy.rebook.model.market.Deal;
import com.necessafy.rebook.model.market.OldBook;
import lombok.*;

import java.util.List;

@ToString
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookDetailRequest {

    private String lat;
    private String lng;
    private int status;
    private int userEvaluation; // this can be rating
    private List<BookComment> bookComment;
//    private List<Book> recoBooks;
    private List<OldBook> market;

}
