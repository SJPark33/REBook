// 하단 DB 설정 부분은 Sub PJT II에서 데이터베이스를 구성한 이후에 주석을 해제하여 사용.

package com.necessafy.rebook.model.user;

import com.necessafy.rebook.model.TimeEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@EqualsAndHashCode(callSuper=false)
@NoArgsConstructor
@AllArgsConstructor
@Builder
//사용자 정보를 담당할 도메인
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class User  extends TimeEntity {
    //    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private String uid;
//
//    @JsonIgnore
//    private String password;
//    private String email;
//
//    @Column(insertable = false, updatable = false)
//    private LocalDateTime createDate;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;


    @Column
    private String picture;

// 기본적으로 JPA로 DB에 저장될때 Enum 은 int로 저장
// 숫자로 저장되면 DB로 확인할때 값의 의미를 정확히 알지 못하므로
// 문자열로 저장할 수 있게 함  @Enumerated
    @Enumerated(EnumType.STRING)
    @Column(nullable =false)
    private Role role;
    public User update(String name, String picture) {
        this.name =name;
        this.picture = picture;

        return this;
    }

    public String getRoleKey(){
        return this.role.getKey();
    }

}
