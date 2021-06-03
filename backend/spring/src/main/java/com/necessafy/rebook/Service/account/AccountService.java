package com.necessafy.rebook.Service.account;



import com.necessafy.rebook.dao.account.UserRebookDao;
import com.necessafy.rebook.model.user.UserRebook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.necessafy.rebook.utils.HttpUtils.makeResponse;

@Service
public class AccountService {

    @Autowired
    private UserRebookDao userRebookDao;

    public List<UserRebook> getAllUsers() {
        return userRebookDao.findAll();
//                .stream()
//                .map(u -> userMapper.to(u))
//                .collect(Collectors.toList());
    }

    public Object overlabAndBlankCheckWhenSignUp(String email,String nickname,String password){

        // 이메일 중복 체크
        if(userRebookDao.findByEmail(email).isPresent()){
            return makeResponse("400",null,"this email already exists", HttpStatus.BAD_REQUEST);
        }

        // 이메일 , 별명, 패스워드 비어있는지 체크
        if("".equals(email)||"".equals(nickname)||"".equals(password)){
            return  makeResponse("400",null,"data is blank",HttpStatus.BAD_REQUEST);
        }
        //별명이 중복되는지 체크
        if (userRebookDao.findByNickname(nickname).isPresent()){
            return makeResponse("400",null,"this nickname already exists",HttpStatus.BAD_REQUEST);
        }

        return null;
    }
    public UserRebook buildUser(String email,String password,String nickname,String salt) {
        return UserRebook.builder()
                .email(email)
                .password(password)
                .nickname(nickname)
                .salt(salt)
                .build();
    }
}

