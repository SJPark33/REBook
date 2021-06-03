package com.necessafy.rebook.Service.jwt;

import java.util.Map;

public interface JwtService {

    // T가 모든 컬랙션 다 사용 가능!
    <T> String create(String key, T data, String subject);
    Map<String, Object> get(String key);
    String getUserEmail(String key);
    boolean isUsable(String jwt);
}