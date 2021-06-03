
package com.necessafy.rebook.dao.account;

import com.necessafy.rebook.model.user.UserRebook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//USer의 CRUD Interface
public interface UserRebookDao extends JpaRepository<UserRebook, String> {
    UserRebook getUserByEmail(String email);

    //Optional<User> findUserByEmailAndPassword(String email, String password);

    // 소셜 로그인으로 반환되는 값 중
    // email을 통해 이미 생성된 사용자인지 , 첫가입하는 사용자인지
    // 판단하기 위한 메서드
    Optional<UserRebook> findByEmail(String email);
    Optional<UserRebook> findUserRebookByEmailAndPassword(String email,String password);
    Optional<UserRebook> findByNickname(String nickname);
}
