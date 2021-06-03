package com.necessafy.rebook.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.necessafy.rebook.model.TimeEntity;
import lombok.*;
//import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@EqualsAndHashCode(callSuper=false)
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserRebook extends TimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @JsonIgnore
    private String password;
    private String nickname;


    private String salt;

    @Column(name="USER_EMAIL", nullable = false, unique = true)
    private String email;

}
