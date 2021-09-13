package com.mycom.app.domain.dto.login;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginDto {

    private String userId;
    private String password;
}
