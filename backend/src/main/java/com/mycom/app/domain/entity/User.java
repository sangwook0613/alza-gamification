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
@DynamicInsert
@DynamicUpdate
@Table(name="USER")
public class User {
    @Id
    @Column(length = 20)
    private String userId;

    @JsonIgnore
    @Column(length = 20)
    private String password;

    @Column(length = 20)
    private String userName;

    @Column(length = 20)
    private String userNickname;

    @Column(length = 13)
    private String userTel;

    private String userEmail;

    @JsonIgnore
    private String refreshToken;

}
