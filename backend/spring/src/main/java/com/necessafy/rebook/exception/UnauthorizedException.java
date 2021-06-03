package com.necessafy.rebook.exception;

public class UnauthorizedException extends RuntimeException{
    // 객체 직렬화 : 객체를 파일에 쓰거나 전송하기위해 사용
    private static final long serialVersionUID = -2238030302650813813L;

    public UnauthorizedException() {
        super("계정 권한이 유효하지 않습니다.\n다시 로그인을 해주세요.");
    }
}