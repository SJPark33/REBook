package com.necessafy.rebook.model.market;

import org.springframework.stereotype.Component;

@Component
public class DealerMapper {
    public Dealer from(DealerDto dealerDto){
        return Dealer.builder()
//                .id(dealerDto.getId())
                .userEmail(dealerDto.getUserEmail())
                .build();
    }
}
