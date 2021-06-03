package com.necessafy.rebook.dao;

import com.necessafy.rebook.model.market.Dealer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DealerDao extends JpaRepository<Dealer, Long> {
    List<Dealer> findByUserEmail(String email);
}