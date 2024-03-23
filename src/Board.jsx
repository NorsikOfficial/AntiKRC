import React from "react";
import { useSelector } from "react-redux";
import "./Board.css";

const Board = () => {
    const Board = useSelector((state) => state.GeneralSlice.board);

    return (
        <div className="Board">
            {Board.map((row) => {
                return (
                    <div className="row">
                        {
                        row.map((value) => {
                            if (value == 0) {
                                return (
                                    <div className="SquareBlack"></div>
                                );
                            }
                            if (value == 1) {
                                return (
                                    <div className="SquareGreen"></div>
                                );
                            }
                        })
                        }
                    </div>
                );
            })}
        </div>
    );
}

export default Board;