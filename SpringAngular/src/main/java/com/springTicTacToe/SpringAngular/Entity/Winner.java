package com.springTicTacToe.SpringAngular.Entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "winners")
public class Winner {



    @Id
    private String _id;
    private String winner;


    public Winner(String _id, String winner) {
        this._id = _id;
        this.winner = winner;
    }

    public Winner() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getWinner() {
        return winner;
    }

    public void setWinner(String winner) {
        this.winner = winner;
    }

    @Override
    public String toString() {
        return "Winner{" +
                "_id='" + _id + '\'' +
                ", winner='" + winner + '\'' +
                '}';
    }
}
