package com.necessafy.rebook.model.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserUpdate {
    String UserId;
    String email;
    String password;
    String nickname;
    String description;
    String profileImagePath;
}
