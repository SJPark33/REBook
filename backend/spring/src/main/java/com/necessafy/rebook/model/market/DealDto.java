package com.necessafy.rebook.model.market;

import lombok.*;

@ToString
@Builder
@Getter
@Setter
@AllArgsConstructor
public class DealDto {
    private long id;
    private DealerDto buyer;
    private OldBookDto oldBook;
    private boolean complete;
}
