import { Search } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { useGetSearchListQuery, useLazyGetSearchListQuery } from '../api/playerApi';
import { useAppDispatch } from '../store/Store';
import { PlayerList } from '../models/playerlists.model';
import PlayerListContainer from './PlayerListContainer';

interface props {
    playerSearch: number
}

const PlayerSearchContainer = ({playerSearch}: props) => {

    const [getPlayerList, {data: playerData, isSuccess: playerDataSuccess, isLoading: playerDataLoading, isFetching: playerDataFetching}] = useLazyGetSearchListQuery();

    const [playerList, setPlayerlist] = useState<PlayerList>();
    const [searchValue, setSearchValue] = useState('');
    const [isSelect, setIsSelected] = useState(false);

    const dispatch = useAppDispatch();

    const handleChange = (e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    const handleSubmit = () => {
        if (searchValue.indexOf(' ') >= 0) {
            const x = searchValue.split(/(\s+)/);
            getPlayerList({first_name: x[0], last_name: x[2], per_page: 50, cursor: 50})
        } else {
            getPlayerList({search: searchValue, per_page: 50, cursor: 50})
        }
    }

    useEffect(() => {
        setPlayerlist(playerData);
        console.log(playerData);
    }, [playerData])

    return(
        <div>
            <div className="mt-4">
                <FormControl sx={{backgroundColor: 'white', borderRadius: '5px', width: '90%'}}>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        onChange={handleChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleSubmit}>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}/>    
                </FormControl>
            </div>
            <PlayerListContainer
            list={playerList}
            playerSearch={playerSearch}
            />
        </div>
    )
}

export default PlayerSearchContainer