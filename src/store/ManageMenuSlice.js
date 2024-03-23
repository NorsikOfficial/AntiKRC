import { createSlice } from "@reduxjs/toolkit";
import {setboard, nextmove} from "../functions"

const initialState = {
    board: [],
    secondinterval: 1000
};

const GameOfLifeGeneralSlice = createSlice({
    name: "ManageMenuSlice",
    initialState,
    reducers: {
        setSecondInterval: (state, action) => {
            state.secondinterval = action.payload;
        },
        setBoard: (state, action) => {
            state.board = setboard(action.payload);
        },
        nextMove: (state) => {
            console.log(state.board)
            state.board = nextmove(state.board);
        }
    }
});

export const {setSecondInterval, setBoard, nextMove} = GameOfLifeGeneralSlice.actions
export default GameOfLifeGeneralSlice.reducer