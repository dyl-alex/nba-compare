import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { PlayerList } from "../models/playerlists.model";

interface appState {
   showButton: {
    button1: boolean,
    button2: boolean
   }

}

const initialState: appState = {
    showButton: {
        button1: false,
        button2: false
    }
}

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setShowButton(state, action: PayloadAction<{showButton: boolean, search: number}>) {
            if (action.payload.search === 1) {
                state.showButton.button1 = action.payload.showButton;
            } else {
                state.showButton.button2 = action.payload.showButton;
            }
        }
        
    }
})
export const {setShowButton} = appSlice.actions
export default appSlice.reducer