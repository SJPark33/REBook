package com.necessafy.rebook.model.market;

import org.springframework.stereotype.Component;

@Component
// seller를 생성한 뒤에 그 정보를 삽입하며 OldBook까지 생성한다
public class OldBookMapper {
    //OldBookDto를 받아 OldBook Entity로 변환
    public OldBook from(OldBookDto oldBookDto) {
        // seller 생성
        Dealer seller = Dealer.builder()
                .userEmail(oldBookDto.getUserId())
                .build();
        // builder를 이용해서 oldBook 생성
        return OldBook.builder()
                .id(oldBookDto.getId())
                .isbn(oldBookDto.getIsbn())
                .title(oldBookDto.getTitle())
                .seller(seller)
                .build();
    }
//
//    public OldBookDto to(OldBook oldBook) {
//        Dealer seller = oldBook.getSeller();
//        DealerDto sellerDto = DealerDto.builder()
//                .id(seller.getId())
//                .userEmail(seller.getUserEmail())
//                .build();
//
//        return OldBookDto.builder()
//                .id(oldBook.getId())
//                .title(oldBook.getTitle())
//                .isbn(oldBook.getIsbn())
//                .sellerDto(sellerDto)
//                .build();
//    }
}
