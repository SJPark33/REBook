package com.necessafy.rebook.model.book;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
//@JsonInclude(JsonInclude.Include.NON_NULL)

public class Book {
    private String publisher;
    private String bookSummary;

    @Id
    private String isbn;
    private String subcategory;
    private String title;
    private String country;
    private int price;
    private String writer;
    private String bookImagePath;
    private String maincategory;
    private String publishDate;
    private int evaluation;
    private int categoryid;
    private String slicedTitle;
}
