package com.mycom.app.service;

import com.mycom.app.domain.dto.login.LoginDto;
import com.mycom.app.domain.dto.login.LoginResultDto;
import com.mycom.app.domain.dto.login.TokenUpdateDto;
import com.mycom.app.domain.entity.User;
import com.mycom.app.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class LoginService {

    @Autowired
    LoginRepository loginRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Transactional
    public User login(LoginDto loginDto){
        User user = loginRepository.findByUserId(loginDto.getUserId());

        if(user != null && user.getPassword().equals(loginDto.getPassword())) {
            return user;
        } else {
            return null;
        }
    }

    @Transactional
    public int setRefreshToken(TokenUpdateDto tokenUpdateDto){
        try{
            User user = loginRepository.findByUserId(tokenUpdateDto.getUserId());

            if(user != null){
                user.setRefreshToken(tokenUpdateDto.getRefreshToken());
                loginRepository.save(user);
            } else return FAIL;
            return SUCCESS;
        } catch (Exception e){
            e.printStackTrace();
            return FAIL;
        }
    }

    @Transactional
    public String getRefreshToken(String userId){
        User user = loginRepository.findByUserId(userId);
        if(user != null){
            return user.getRefreshToken();
        }
        return null;
    }

    @Transactional
    public LoginResultDto setLoginResult(User user) {

        LoginResultDto loginResultDto = new LoginResultDto();

        loginResultDto.setUserId(user.getUserId());
        loginResultDto.setUserName(user.getUserName());
        loginResultDto.setUserNickname(user.getUserNickName());
        loginResultDto.setUserEmail(user.getUserEmail());

        return loginResultDto;
    }
}
