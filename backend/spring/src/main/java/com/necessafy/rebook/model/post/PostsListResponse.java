package com.necessafy.rebook.model.post;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PostsListResponse {
    private Long id;
    private String title;
    private String author;
    private LocalDateTime modifiedDate;

    public PostsListResponse(Posts entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.author = entity.getAuthor();
        this.modifiedDate = entity.getModifiedDate();
    }
}
