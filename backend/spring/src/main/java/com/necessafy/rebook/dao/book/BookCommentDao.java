
package com.necessafy.rebook.dao.book;

import com.necessafy.rebook.model.book.Book;
import com.necessafy.rebook.model.book.BookComment;
import com.necessafy.rebook.model.user.UserRebook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookCommentDao extends JpaRepository<BookComment, Long> {

    Optional<BookComment> findByBookAndUserRebook(Book book, UserRebook userRebook);
    //Optional<BookComment> findbyBook(Book book);


//    select *from book_comment where user_email="sbs@ssafy.com";


    List<BookComment> findByUserRebook(UserRebook userRebook);

    List<BookComment> findAllByBook(Book book);
}
