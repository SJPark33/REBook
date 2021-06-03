package com.necessafy.rebook.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommonResult {

    @ApiModelProperty(value = "status", position = 1)
    public boolean status;
    @ApiModelProperty(value = "data", position = 2)
    public String data;
    @ApiModelProperty(value = "object", position = 3)
    public Object object;



//    private boolean success;
//    private String code;
//    private String msg;
//
//    public boolean isSuccess() { return success; }
//
//    public void setSuccess(boolean success) { this.success = success; }
//
//    public String getCode() { return code; }
//
//    public void setCode(String code) { this.code = code; }
//
//    public String getMsg() { return msg; }
//
//    public void setMsg(String msg) { this.msg = msg; }

}
