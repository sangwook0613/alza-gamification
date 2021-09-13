package com.mycom.app.service;


import com.mycom.app.domain.dto.UserDto;

public interface UserService {

    boolean checkUserId(String userId);
    int join(UserDto userDto);
}
