package com.mycom.app.controller;

import com.mycom.app.service.GameService;
import com.mycom.app.service.StageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {

    @Autowired
    GameService gameService;

}
