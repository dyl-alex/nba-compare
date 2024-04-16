import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { PlayerList } from "../models/playerlists.model";

interface appState {
   showButton: boolean

}

const initialState: appState = {
    showButton: false
}

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setShowButton(state, action: PayloadAction<{showButton: boolean}>) {
            state.showButton = action.payload.showButton
        }
        
    }
})
export const {setShowButton} = appSlice.actions
export default appSlice.reducer