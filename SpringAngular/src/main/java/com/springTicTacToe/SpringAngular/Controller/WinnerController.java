package com.springTicTacToe.SpringAngular.Controller;


import com.springTicTacToe.SpringAngular.Entity.Winner;
import com.springTicTacToe.SpringAngular.Service.WinnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/winner")
public class WinnerController {

    @Autowired
    private WinnerService WinnerService;



    @PostMapping(value= "/save")
    private String saveWinner(@RequestBody Winner winners) {
        WinnerService.saveOrUpdate(winners);
        return winners.getWinner();

    }

    @GetMapping(value = "/getAll")
    private Iterable<Winner>getWinners() {
        return  WinnerService.listAll();
    }
}
