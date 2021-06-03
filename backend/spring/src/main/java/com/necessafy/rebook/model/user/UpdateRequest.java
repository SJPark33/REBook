package com.necessafy.rebook.model.user;

import lombok.*;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateRequest {
    String email;
    String nickname;
    String  password;
    String newPassword;
}
