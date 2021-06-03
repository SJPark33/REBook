package com.necessafy.rebook.model.market;

import lombok.*;

import javax.persistence.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
@ToString
@Table(name = "oldBook")
/*
장터 책!!
중고 책 정보 Entity
책 기본 정보 : -title(String), -bookImagePath(String), -isbn(String),
중고 거래용 정보 : -status(int), -bookPhoto(String), -price(int), -description(String), -address(String), -lat(String), -lng(String)
판매자 정보 : -userId(String)판매자!
 */
public class OldBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "isbn")
    private String isbn;
    @Column(name = "title")
    private String title;
    @Column(name = "bookImagePath")
    private String bookImagePath;
    @Column(name = "status")
    private int status;
    @Column(name = "bookPhoto")
    private String bookPhoto;
    @Column(name = "price")
    private int price;
    @Column(name = "description")
    private String description;
    @Column(name = "address")
    private String address;
    @Column(name = "lat")
    private String lat;
    @Column(name = "lng")
    private String lng;
    // TODO: 부모가 생성되기전에 자식이 생성되어서, CascadeType.All 추가
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Dealer seller;
}
