import {useEffect} from 'react';
import { playerApi } from '../api/playerApi';
import { Dashboard} from './Dashboard'
export const Landing = () => {

    return (
        <div className="w-full h-full bg-gradient-to-t from-orange-100 via-orange-600 to-amber-500">
            <div className="flex align-middle">
            <img src="./compareIcon.png" style={{width: '100px', margin: 'auto'}}></img>
            </div>
            <h1 className="text-2xl pt-3 pb-4">Welcome to Basketball Compare</h1>
            <Dashboard/>
        </div>
    )
}