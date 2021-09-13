package com.mycom.app.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "USER")
public class User {

    @Id
    @Column(length = 20)
    private String userId;

    @Column(length = 20)
    private String password;

    @Column(length = 20)
    private String userName;

    @Column(length = 13)
    private String userTel;

    @Column(length = 20)
    private String userNickname;

    @JsonIgnore
    private String refreshToken;
}
