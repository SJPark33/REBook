package com.necessafy.rebook.model.user;
import lombok.*;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthenticationResponse {
    UserRebook user;
    String token;
}
