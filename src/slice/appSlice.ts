import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { PlayerList } from "../models/playerlists.model";
import { PlayerStats } from "../models/playerstats.model";

interface appState {
   showButton: {
    button1: boolean,
    button2: boolean
   },
   playerIds: number[],
   playerName: {
    nameOne: string,
    nameTwo: string
   },
   playerStats: {
    playerOne: PlayerStats,
    playerTwo: PlayerStats
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
    },
    playerStats: {
        playerOne: {
            data: [
            {
              pts: 0,
              ast: 0,
              turnover: 0,
              pf: 0,
              fga: 0,
              fgm: 0,
              fta: 0,
              ftm: 0,
              fg3a: 0,
              fg3m: 0,
              reb: 0,
              oreb: 0,
              dreb: 0,
              stl: 0,
              blk: 0,
              fg_pct: 0,
              fg3_pct: 0,
              ft_pct: 0,
              min: '',
              games_played: 0,
              player_id: 0,
              season: 0
            }
          ]},
        playerTwo: {
            data: [
            {
              pts: 0,
              ast: 0,
              turnover: 0,
              pf: 0,
              fga: 0,
              fgm: 0,
              fta: 0,
              ftm: 0,
              fg3a: 0,
              fg3m: 0,
              reb: 0,
              oreb: 0,
              dreb: 0,
              stl: 0,
              blk: 0,
              fg_pct: 0,
              fg3_pct: 0,
              ft_pct: 0,
              min: '',
              games_played: 0,
              player_id: 0,
              season: 0
            }
          ]}
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
        },
        setPlayerStats(state, action: PayloadAction<{stats: PlayerStats, search: number}>) {
            if (action.payload.search == 1) {
                state.playerStats.playerOne = action.payload.stats
            } else {
                state.playerStats.playerTwo = action.payload.stats
            }
        }
        
    }
})
export const {setShowButton, setPlayerIds, setPlayerNames, setPlayerStats} = appSlice.actions
export default appSlice.reducer