package com.necessafy.rebook.controller.deal;

import com.necessafy.rebook.Service.deal.DealService;
import com.necessafy.rebook.Service.deal.DealerService;
import com.necessafy.rebook.Service.deal.OldBookService;
import com.necessafy.rebook.Service.jwt.JwtService;
import com.necessafy.rebook.dao.DealerDao;
import com.necessafy.rebook.model.market.*;
import com.necessafy.rebook.model.user.SignupRequest;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.python.core.Py;
import org.python.core.PyFunction;
import org.python.core.PyInteger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import java.util.Optional;

import org.python.core.PyObject;
import org.python.util.PythonInterpreter;

import static com.necessafy.rebook.utils.HttpUtils.convertObjectToJson;
import static com.necessafy.rebook.utils.HttpUtils.makeResponse;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/yangsangchu")
public class DealController {

    @Autowired
    DealerService dealerService;

    @Autowired
    JwtService jwtService;

    @Autowired
    DealService dealService;

    @Autowired
    OldBookService oldBookService;

    @PostMapping
    @ApiOperation(value = "중고책을 등록합니다", notes = "중고 장터에 책을 등록하기 위한 정보들")
    public Object createOldBook(@RequestBody @ApiParam(value = "판매자 정보를 포함한 중고책 정보", required = true) OldBookDto request){
        // 중고책을 등록하는 서비스 호출
//        dealerService.createOrSelectSeller(request.getUserId());
//        if(dealerService.isCreatedSeller(request).size()>0){
//            Optional<OldBook> curOldBook = oldBookService.checkDuplicateOldBook(request);
//            if(curOldBook.isPresent()){
//                return makeResponse("200", convertObjectToJson(curOldBook.get()), "이미 등록했던 중고책입니다", HttpStatus.OK);
//            }
//        }
//        OldBook savedOldBook = oldBookService.createOldBook(request);
        OldBook savedOldBook = oldBookService.createOldBook(request);
        return makeResponse("200", convertObjectToJson(savedOldBook), "중고책 등록에 성공하였습니다", HttpStatus.OK);
    }
//    @PostMapping
//    @ApiOperation(value = "중고책을 등록합니다.", notes = "seller(id + email) 생성 후 isbn과 함꼐 중고책 등록 후 저장 결과 반환")
//    public Object createSeller(@RequestBody @ApiParam(value = "판매자 정보를 포함한 중고책 정보"
//            , required = true) OldBookDto request) {
//        /* seller가 존재하는지 파악해서, 존재한다면 해당 아이디 사용, 존재하지 않는다면 등록 */
////        dealerService.createOrSelectSeller(request.getSellerDto().getUserEmail());
//        Optional<OldBook> curOldBook = oldBookService.checkDuplicateOldBook(request);
//        // 해당 중고도서를 이미 등록하였을 때 로직





//        if(curOldBook.isPresent()){
//            return makeResponse("200", convertObjectToJson(curOldBook.get()), "이미 등록된 중고책입니다", HttpStatus.OK);
//        }
//        //
//        OldBook savedOldBook = oldBookService.createOldBook(request);
//        return makeResponse("200", convertObjectToJson(savedOldBook), "중고책 등록에 성공하였습니다", HttpStatus.OK);
//    }

    @PostMapping("/buyer")
    @ApiOperation(value = "중고책을 선택하여 거래를 시작합니다", notes = "buyer(id + email) 생성 후 거래를 시작합니다")
    public Object createBuyerAndDeal(@RequestBody @ApiParam(value = "구매자 정보", required = true) DealDto request){
        // buyer정보의 해당 중고책 거래 내역이 있는지 확인한다
        System.out.println("구매자");
        System.out.println(request.getBuyer());
        System.out.println("중고책");
        System.out.println(request.getOldBook());
//        Optional<Deal> curDeal = dealService.checkDuplicateDeal(request.getBuyer(), request.getOldBook());
//        if(curDeal.isPresent()){
//            return makeResponse("200", convertObjectToJson(curDeal.get()), "이미 진행중인 거래입니다.", HttpStatus.OK);
//        }
        Deal savedDeal = dealService.createDeal(request.getBuyer(), request.getOldBook());
        return makeResponse("200", convertObjectToJson(savedDeal), "거래가 시작되었습니다.", HttpStatus.OK);
    }

//    private static PythonInterpreter intPre;
    // 현재 로그인한 사용자와 거래가 진행중인 채팅방의 목록을 반환한다.
    @PostMapping("/deallist/{email}")
    @ApiOperation(value = "현재 거래중인 채팅방에 대한 정보를 반환한다.", notes = "클릭하면 chatId를 반환한다")
    public Object selectDealList(HttpServletRequest httpServletRequest, @PathVariable String email){
        //TODO:현재 사용자의 토큰 값!
//        System.out.println("before auth");
//        String test = jwtService.getUserEmail(httpServletRequest.getHeader("Authorization"));
//
//        System.out.println("after auth");
        System.out.println(dealService.findBuyerAndSellerByUserEmail(email));
        return dealService.findBuyerAndSellerByUserEmail(email);
//        return "hello";
    }
    
//    @GetMapping("/showBuyer/{userId}")
//    @ApiOperation(value = "구매자 아이디를 이용하여 닉네임을 가져옵니다", notes = "클릭하면 chatId를 반환한다")
//    public Object showBuyer(HttpServletRequest httpServletRequest, @PathVariable String userId){
//        //TODO:현재 사용자의 토큰 값!
//        Long.parseLong(userId);
//        System.out.println("before auth");
//        String test = jwtService.getUserEmail(httpServletRequest.getHeader("Authorization"));
//
//        System.out.println("after auth");
//        System.out.println(dealService.findBuyerAndSellerByUserEmail(email));
//        return dealService.findBuyerAndSellerByUserEmail(email);
//        return "hello";
    
    // 채팅방을 선택하면, chatId에 의해서 채팅방 정보를 병경해줄수 있다.
    
    // 이제 서로 확인작업을 통해서 complete 값을 갱신시켜주면 거래 완료

}
