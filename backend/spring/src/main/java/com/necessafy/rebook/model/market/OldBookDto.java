package com.necessafy.rebook.model.market;

import lombok.*;

@ToString
@Builder
@Getter
@Setter
@AllArgsConstructor
public class OldBookDto {
    private long id;
    private String isbn;
    private String title;
    private String bookImagePath;
    private int status;
    private String bookPhoto;
    private int price;
    private String description;
    private String address;
    private String lat;
    private String lng;
    // userId를 입력받는다, 이후 seller 정보가 되어 저장된다.
    private String userId;
}
