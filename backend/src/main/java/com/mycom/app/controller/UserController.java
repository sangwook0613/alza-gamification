package com.mycom.app.controller;

import com.mycom.app.domain.dto.UserDto;
import com.mycom.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/user")
    public ResponseEntity<UserDto> userDetail(@RequestParam String userId){
        UserDto userDto = userService.userDetail(userId);
        if(userDto == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

}
