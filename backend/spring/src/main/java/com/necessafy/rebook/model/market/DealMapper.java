//package com.necessafy.rebook.model.market;
//
//import org.springframework.stereotype.Component;
//
//@Component
//public class DealMapper {
//    public DealDto to(Deal deal) {
//        OldBook sellingBook = deal.getOldBook();
//
//        DealerDto buyerDto = DealerDto.builder()
//                .id(deal.getBuyer().getId())
//                .userEmail(deal.getBuyer().getUserEmail())
//                .build();
//
//        DealerDto sellerDto = DealerDto.builder()
//                .id(sellingBook.getSeller().getId())
//                .userEmail(sellingBook.getSeller().getUserEmail())
//                .build();
//
//        OldBookDto oldBookDto = OldBookDto.builder()
//                .id(deal.getOldBook().getId())
//                .sellerDto(sellerDto)
//                .isbn(sellingBook.getIsbn())
//                .title(sellingBook.getTitle())
//                .build();
//
//        return DealDto.builder()
//                .id(deal.getId())
//                .oldBook(oldBookDto)
//                .buyer(buyerDto)
//                .complete(deal.isComplete())
//                .build();
//    }
//}
