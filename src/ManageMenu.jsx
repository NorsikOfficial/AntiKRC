import React, { useEffect, useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { setSecondInterval, setBoard, nextMove } from "./store/ManageMenuSlice";
import { useSelector} from "react-redux";
import { setboard, nextmove} from "./functions";

let timerid = null;

const ManageMenu = () => {
    const secondinterval = useSelector((state) => state.GeneralSlice.secondinterval);
    const dispatch = useDispatch();

    return (
        <div className="ManageMenu">
            <div className="SetSpeed">
                <input type="range" min="1" max="1000" name="setseconds" onChange={(e) => {
                    dispatch(setSecondInterval(parseInt(e.target.value)));
                    clearInterval(timerid);
                    timerid = setInterval(() => {
                        dispatch(nextMove());
                    }, secondinterval);
                }}/>
            </div>
            <div className="BoardGenerate">
                <button className="GenerateBoard" onClick={() => {
                    dispatch(setBoard(50));
                }}>Generate</button>
            </div>
            <span>GameOflife John Conways - делал 3 часа это чтобы пятерочку в году получить</span>
        </div>
    );
}

export default ManageMenu;