package com.necessafy.rebook.dao;

import com.necessafy.rebook.model.market.Dealer;
import com.necessafy.rebook.model.market.OldBook;
import org.h2.jdbc.JdbcParameterMetaData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OldBookDao extends JpaRepository<OldBook, Long> {
    Optional<OldBook> findByIsbnAndSeller(String isbn, Dealer seller);

    List<OldBook> findByIsbn(String issbn);
}
