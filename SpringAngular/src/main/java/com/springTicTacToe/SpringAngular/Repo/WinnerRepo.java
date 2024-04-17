package com.springTicTacToe.SpringAngular.Repo;

import com.springTicTacToe.SpringAngular.Entity.Winner;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface WinnerRepo extends MongoRepository<Winner,String> {
}
