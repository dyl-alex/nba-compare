import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {PlayerLists} from '../models/playerlists.model'

const rapidApiHeaders = {
    "X-RapidAPI-Key": "fa925e758fmsh34e589f2771784dp142705jsn022f2c08bb33",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com"
}
export const playerApi = createApi({
    reducerPath: 'playerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        mode: "cors",
        prepareHeaders: (headers, {getState}) => {
            headers.set('Access-Control-Allow-Origin', '*')
            headers.set("X-RapidAPI-Key", "fa925e758fmsh34e589f2771784dp142705jsn022f2c08bb33")
            headers.set("X-RapidAPI-Host","free-nba.p.rapidapi.com")
            headers.set( "access-control-allow-credentials", "true")
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getLeagueList: builder.query< PlayerLists , {page?: number, pageCount?: number, name: string}>({
            query: ({page, pageCount, name}) => ({
            url: `/players?page=${page ? page : null}&per_page=${pageCount ? pageCount : null}&search=${name}`,
            method: 'GET',
        }),
    }),
    }),
});

export const {useLazyGetLeagueListQuery} = playerApi;