
package com.necessafy.rebook.dao.book;

import com.necessafy.rebook.model.book.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookDao extends JpaRepository<Book, String> {
    Optional<Book> findBookByIsbn(String isbn);

    List<Book> findAll();

    Optional<Book> findById(String isbn);

    List<Book> findByTitleContaining(String keyword);
}
