package com.necessafy.rebook.dao.book;

import com.necessafy.rebook.model.book.Book;
import com.necessafy.rebook.model.book.BookComment;
import com.necessafy.rebook.model.book.UserReadStatus;
import com.necessafy.rebook.model.user.UserRebook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserReadStatusDao extends JpaRepository<UserReadStatus, String> {

    Optional<UserReadStatus> findByUserRebookAndBook(UserRebook userRebook,Book book);

}
