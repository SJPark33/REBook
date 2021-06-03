package com.necessafy.rebook.dao;

import com.necessafy.rebook.model.market.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DealDao extends JpaRepository<Deal,Long> {
    Optional<Deal> findByBuyerAndOldBook(Dealer buyer, OldBook oldBook);

    List<Deal> findByOldBook(OldBook oldBook);

//    List<Deal> findAllByBuyer();

    @Query(value = "select deal.id, deal.complete, deal.buyer_id, deal.old_book_id from dealer inner join deal on dealer.id = deal.buyer_id where dealer.user_email = ?1",nativeQuery = true)
    List<Deal>  findDealByEmailAsBuyer(String email);

    @Query(value = "select deal.id, deal.complete, deal.buyer_id, deal.old_book_id from deal join old_book on deal.old_book_id = old_book.id join dealer on old_book.seller_id = dealer.id where dealer.user_email = ?1",nativeQuery = true)
    List<Deal>  findDealByEmailAsSeller(String email);

}
