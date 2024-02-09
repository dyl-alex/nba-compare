import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { PlayerLists } from "../models/playerlists.model";

interface appState {
    playerOne : string,
    playerTwo : string

}

const initialState: appState = {
    playerOne : '',
    playerTwo : ''
}

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setPlayerOne(state, action: PayloadAction<string>) {
            state.playerOne = action.payload;
        },
        setPlayerTwo(state, action: PayloadAction<string>) {
            state.playerTwo = action.payload;
        }
    }
})
export const {setPlayerOne, setPlayerTwo} = appSlice.actions
export default appSlice.reducer