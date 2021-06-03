package com.necessafy.rebook.model.book;

import lombok.*;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateBookCommentRequest {
    String email;
    Integer rating;
    String review;
    String isbn;
}
