package com.necessafy.rebook.model.book;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.necessafy.rebook.model.user.UserRebook;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
@NoArgsConstructor
@AllArgsConstructor
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserReadStatusRequest {


//    private Long id;
    private int status; //읽고 싶어요 0 읽고 있어요 1 읽었어요 2
//    private UserRebook userRebook;
    private String email;
    private Book book;

    private String readStart;
    private String readEnd;




}
