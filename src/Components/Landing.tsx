import {useEffect} from 'react';
import { playerApi } from '../api/playerApi';
import { Dashboard} from './Dashboard'
export const Landing = () => {

    return (
        <div className="w-full h-full">
            <h1 className="m-4 text-lg">Welcome to Basketball Compare</h1>
            <Dashboard/>
        </div>
    )
}