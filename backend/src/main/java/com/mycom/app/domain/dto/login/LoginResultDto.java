package com.mycom.app.domain.dto.login;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResultDto {

    private String userId;
    private String userName;
    private String userNickname;
    private String userEmail;

}
