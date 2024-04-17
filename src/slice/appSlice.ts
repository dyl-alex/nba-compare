import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { PlayerList } from "../models/playerlists.model";

interface appState {
   showButton: {
    button1: boolean,
    button2: boolean
   },
   playerIds: number[],
   playerName: {
    nameOne: string,
    nameTwo: string
   }
}

const initialState: appState = {
    showButton: {
        button1: false,
        button2: false
    },
    playerIds: [0],
    playerName: {
        nameOne: '',
        nameTwo: ''
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
        },
        setPlayerIds(state, action: PayloadAction<{id: number, search: number}>) {
            if (action.payload.search == 1) {
                state.playerIds[0] = action.payload.id
            } else {
                state.playerIds[1] = action.payload.id
            }
        },
        setPlayerNames(state, action: PayloadAction<{name: string, search: number}>) {
            if (action.payload.search == 1) {
                state.playerName.nameOne = action.payload.name
            } else {
                state.playerName.nameTwo = action.payload.name
            }
        }
        
    }
})
export const {setShowButton, setPlayerIds, setPlayerNames} = appSlice.actions
export default appSlice.reducer