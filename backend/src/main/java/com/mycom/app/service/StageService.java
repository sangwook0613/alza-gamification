package com.mycom.app.service;


import com.mycom.app.domain.dto.StageDto;

public interface StageService {
    StageDto getStageInfoByUserIdAndGameCode(String userId, int gameCode);
    int updateStageInfo(StageDto stageDto);
}
