package com.necessafy.rebook.model.book;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.necessafy.rebook.model.book.Book;
import com.necessafy.rebook.model.user.UserRebook;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserReadStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int status; //읽고 싶어요 0 읽고 있어요 1 읽었어요 2

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private UserRebook userRebook;


    private String readStart;
    private String readEnd;

    // 자식이 먼저 생성되는 문제 방지용 cascade 추가
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="BOOK_ISBN")
    private Book book;




}
