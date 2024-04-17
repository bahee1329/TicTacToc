package com.springTicTacToe.SpringAngular.Service;

import com.springTicTacToe.SpringAngular.Entity.Winner;
import com.springTicTacToe.SpringAngular.Repo.WinnerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WinnerService {

    @Autowired
    private WinnerRepo repo;

    public void saveOrUpdate(Winner winners) {
       repo.save(winners); 
    }

    public Iterable<Winner> listAll() {
        return this.repo.findAll();
    }
}
