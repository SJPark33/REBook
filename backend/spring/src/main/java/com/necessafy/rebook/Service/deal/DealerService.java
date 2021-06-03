package com.necessafy.rebook.Service.deal;

import com.necessafy.rebook.dao.DealDao;
import com.necessafy.rebook.dao.DealerDao;
import com.necessafy.rebook.exception.NotExistsDealException;
import com.necessafy.rebook.model.market.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DealerService {
//    private final DealDao dealDao;
//    private final DealerDao dealerDao;
    private final DealerMapper dealerMapper;
//    private final OldBookMapper oldBookMapper;
//    private final DealMapper dealMapper;

    @Autowired
    private DealerDao dealerDao;

    /*public Optional<Dealer> findByUserEmail(String email) {
        return dealerDao.findByUserEmail(email);
    }*/

    @Transactional
    public List<Dealer> isCreatedSeller(OldBookDto oldBookDto) {
        return dealerDao.findByUserEmail(oldBookDto.getUserId());
    }


//    @Transactional
//    public Dealer createOrSelectSeller(String email) {
//        List<Dealer> curSeller = dealerDao.findByUserEmail(email);
//        if(curSeller.size()>0){
//            return curSeller;
//        }else{
//            DealerDto seller = DealerDto.builder().userEmail(email).build();
//            return dealerDao.save(dealerMapper.from(seller));
//        }
//    }

//    public Optional<Dealer> createOrSelectBuyer() {
//
//    }

//    @Transactional(readOnly = true)
//    public List<DealDto> getDeals() {
//        List<Deal> allDeals = dealDao.findAll();
//
//        return allDeals.stream()
//                .map(dealMapper::to)
//                .collect(Collectors.toList());
//    }
//
//    @Transactional
//    public long beginDeal(DealerDto buyerDto, OldBookDto oldBookDto) {
//        Dealer buyer = dealerDao.save(dealerMapper.from(buyerDto));
//
//        Deal deal = dealDao.save(Deal.builder()
//                .book(oldBookMapper.from(oldBookDto))
//                .buyer(buyer)
//                .build());
//
//        return deal.getId();
//    }
//
//    @Transactional
//    public List<DealDto> getMyDeals(DealerDto dealerDto) {
//        List<Deal> allDeals = dealDao.findAll();
//
//        /* TODO */
//        /* jpql or querydsl 로 개선 필요한 코드 */
//        Dealer dealer = dealerMapper.from(dealerDto);
//        return allDeals.stream()
//                .filter(d -> (d.getBuyer().getId() == dealer.getId()) || (d.getBook().getSeller().getId() == dealer.getId()))
//                .map(dealMapper::to)
//                .collect(Collectors.toList());
//    }
//
//    @Transactional
//    public void agreeSeller(long dealId) {
//        Deal deal = dealDao.findById(dealId).orElseThrow(NotExistsDealException::new);
//
//        deal.getBook().getSeller().agree();
//    }
//
//    @Transactional
//    public void agreeBuyer(long dealId) {
//        Deal deal = dealDao.findById(dealId).orElseThrow(NotExistsDealException::new);
//
//        deal.getBuyer().agree();
//    }
//
//    public boolean isAllAgree(long dealId) {
//        Deal deal = dealDao.findById(dealId).orElseThrow(NotExistsDealException::new);
//
//        return deal.getBuyer().isAgree() && deal.getBook().getSeller().isAgree();
//    }
//
//    @Transactional
//    public void completeDeal(long dealId) {
//        Deal deal = dealDao.findById(dealId).orElseThrow(NotExistsDealException::new);
//
//        deal.completeDeal();
//    }
}
