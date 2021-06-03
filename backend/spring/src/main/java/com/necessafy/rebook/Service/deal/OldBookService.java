package com.necessafy.rebook.Service.deal;

import com.necessafy.rebook.dao.DealerDao;
import com.necessafy.rebook.dao.OldBookDao;
import com.necessafy.rebook.model.market.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class OldBookService {
    private final OldBookDao oldBookDao;
    private final DealerDao dealerDao;
    private final OldBookMapper oldBookMapper;
    private final DealerMapper dealerMapper;

//    public void requestSellBook(OldBookDto oldBookDto) {
//        OldBook oldBook = oldBookMapper.from(oldBookDto);
//        Dealer dealer = dealerMapper.from(oldBookDto.get());
//
//        dealerDao.save(dealer);
//        oldBookDao.save(oldBook);
//    }

    @Transactional
    public OldBook createOldBook(OldBookDto request) {
        // 판매자와 중고 책을 각각의 테이블에 저장
        Dealer seller = Dealer
                .builder()
//                .id(dealerDao.findByUserEmail(request.getUserId()).get().getId())
                .userEmail(request.getUserId())
                .isAgree(false)
                .build();
//        if(!dealerDao.findByUserEmail(request.getUserId()).isPresent()){
//            dealerDao.save(seller);
//        }
        System.out.println(seller + "is nice");
        OldBook oldBook = OldBook.builder()
                .id(request.getId())
                .title(request.getTitle())
                .bookImagePath(request.getBookImagePath())
                .isbn(request.getIsbn())
                .status(request.getStatus())
                .bookPhoto(request.getBookPhoto())
                .price(request.getPrice())
                .description(request.getDescription())
                .address(request.getAddress())
                .lat(request.getLat())
                .lng(request.getLng())
                .seller(seller)
                .build();
        return oldBookDao.save(oldBook);

        
//        /* oldBookDto를 oldBookEntity로 변환 후 등록 */
//        Optional<OldBook> curOldBook = oldBookDao.findByIsbnAndSeller(request.getIsbn(), dealerDao.findByUserEmail(request.getUserId()).get());
//        if(curOldBook.isPresent()){
//            return curOldBook.get();
//        }
//        requestSellBook(request);
//        return oldBookDao.save(oldBookMapper.from(request));
    }

//    public Optional<OldBook> checkDuplicateOldBook(OldBookDto oldBookDto) {
//
//
//        return oldBookDao.findByIsbnAndSeller(oldBookDto.getIsbn(), dealerDao.findByUserEmail(oldBookDto.getUserId());
//    }

//    @Transactional
//    public Optional<OldBook> checkDuplicateOldBook(OldBookDto request){
//        /* oldBookDto를 oldBookEntity로 변환 후 등록 */
//        System.out.println(request.getIsbn());
//        System.out.println(request.getSellerDto().getUserEmail());
//        System.out.println("-------------------------");
//        Optional<OldBook> curOldBook = oldBookDao.findByIsbnAndSeller(request.getIsbn(), dealerDao.findByUserEmail(request.getSellerDto().getUserEmail()).get());
//        return curOldBook;
//    }
}
