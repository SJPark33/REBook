package com.necessafy.rebook.model.market;

import lombok.*;

import javax.persistence.*;

@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "dealer")
@Entity
public class Dealer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "user_email")
    private String userEmail;

    private boolean isAgree;

    public void agree() {
        isAgree = true;
    }
}
