
package com.necessafy.rebook.dao.account;

import java.util.Optional;

import com.necessafy.rebook.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
//USer의 CRUD Interface
public interface UserDao extends JpaRepository<User, String> {
    User getUserByEmail(String email);

    //Optional<User> findUserByEmailAndPassword(String email, String password);

    // 소셜 로그인으로 반환되는 값 중
    // email을 통해 이미 생성된 사용자인지 , 첫가입하는 사용자인지
    // 판단하기 위한 메서드
    Optional<User> findByEmail(String email);
}
