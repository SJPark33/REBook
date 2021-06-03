package com.necessafy.rebook.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.necessafy.rebook.model.BasicResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class HttpUtils {
    private static ObjectMapper objectMapper = new ObjectMapper();

    public static ResponseEntity<BasicResponse> makeResponse(String status,String data,String message, HttpStatus httpSatus){

        BasicResponse result = BasicResponse.builder().status(status).message(message).data(data).build();
        return new ResponseEntity<>(result,httpSatus);
    }
    public static String convertObjectToJson(Object object){
        try{
            //제이슨 데이터를 보기좋게 출력 :writerWithDefaultPrettyPrinter
            //value를 String으로 변경 : writeValueAsString(value)
            return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(object);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "Faild convert object to json";
        }
    }
}
