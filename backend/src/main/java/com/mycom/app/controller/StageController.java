package com.mycom.app.controller;

import com.mycom.app.service.StageService;
import com.mycom.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StageController {

    @Autowired
    StageService stageService;

}
