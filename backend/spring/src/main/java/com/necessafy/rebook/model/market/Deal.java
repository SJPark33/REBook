package com.necessafy.rebook.model.market;

import lombok.*;

import javax.persistence.*;

@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
@Table(name = "deal")
public class Deal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @OneToOne
    @JoinColumn
    private Dealer buyer;
    @OneToOne
    @JoinColumn
    private OldBook oldBook;
    @Column(name = "complete")
    private boolean complete;

    public void completeDeal() {
        complete = true;
    }
}
