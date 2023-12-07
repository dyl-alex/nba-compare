import {useEffect} from 'react';
import { useLazyGetLeagueListQuery } from '../api/playerApi';
import { playerApi } from '../api/playerApi';
import { Dashboard} from './Dashboard'
export const Landing = () => {

    return (
        <div className="landingContainer">
            <h1>Welcome to Basketball Compare</h1>
            <Dashboard/>
        </div>
    )
}