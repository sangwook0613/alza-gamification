package com.mycom.app.controller;

import com.mycom.app.domain.dto.login.LoginDto;
import com.mycom.app.domain.dto.login.LoginResultDto;
import com.mycom.app.domain.dto.login.TokenDto;
import com.mycom.app.domain.dto.login.TokenUpdateDto;
import com.mycom.app.domain.entity.User;
import com.mycom.app.repository.LoginRepository;
import com.mycom.app.service.JwtService;
import com.mycom.app.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class LoginController {

    @Autowired
    LoginRepository loginRepository;

    @Autowired
    JwtService jwtService;

    @Autowired
    LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<LoginResultDto> login(@RequestBody LoginDto loginDto, HttpServletResponse response){
        User user = loginRepository.findByUserIdAndPassword(loginDto.getUserId(), loginDto.getPassword());

        if(user == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

        LoginResultDto loginResultDto = loginService.setLoginResult(user);

        TokenDto tokenDto = jwtService.create("userId", loginResultDto.getUserId(), "user");

        response.setHeader("jwt-access-token", tokenDto.getAccessToken());
        response.setHeader("jwt-refresh-token", tokenDto.getRefreshToken());

        int result = loginService.setRefreshToken(
                new TokenUpdateDto(tokenDto.getRefreshToken(), loginResultDto.getUserId()));

        if (result != 1) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(loginResultDto, HttpStatus.OK);
    }

}
