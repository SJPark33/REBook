package com.necessafy.rebook.model.post;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostsUpdateRequest {
    private String title;
    private String content;

    @Builder
    public PostsUpdateRequest(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
