package com.necessafy.rebook.model.book;

import lombok.*;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentRequest {

    private Integer rating;
    private String review;
    private String userEmail;
    private String isbn;
    private Book book;

}
