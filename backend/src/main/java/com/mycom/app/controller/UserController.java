package com.mycom.app.controller;

import com.mycom.app.service.LoginService;
import com.mycom.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService userService;

}
