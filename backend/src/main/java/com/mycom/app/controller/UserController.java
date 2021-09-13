package com.mycom.app.controller;

import com.mycom.app.domain.dto.UserDto;
import com.mycom.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/user")
    public ResponseEntity updateUserInfo(@RequestBody UserDto userDto){
        try{
            int result = userService.updateUserInfo(userDto);
            if(result == 1) return new ResponseEntity(true, HttpStatus.OK);
            return new ResponseEntity(false, HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
