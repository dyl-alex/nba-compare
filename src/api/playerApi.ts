import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Player} from '../models/player.model'

const rapidApiHeaders = {
    "X-RapidAPI-Key": "fa925e758fmsh34e589f2771784dp142705jsn022f2c08bb33",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com"
}
const baseUrl = 'free-nba.p.rapidapi.com'

export const playerApi = createApi({
    reducerPath: 'playerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (rapidApiHeaders, {getState}) => {
            return rapidApiHeaders;
        }
    }),
    endpoints: (builder) => ({
        getLeagueList: builder.query< Player , {page?: number, pageCount?: number, name: string}>({
            query: ({page, pageCount, name}) => ({
            url: `/player?page=${page ? page : null}&pageCount=${pageCount ? pageCount : null}&name=${name}`,
        })
    }),
    }),
});

export const {useLazyGetLeagueListQuery} = playerApi;