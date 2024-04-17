import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {PlayerList} from '../models/playerlists.model'
import { Player } from '../models/player.model';
import { PlayerStats } from '../models/playerstats.model';

export const playerApi = createApi({
    reducerPath: 'playerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        mode: "cors",
        prepareHeaders: (headers, {getState}) => {
            headers.set("Authorization", "fd5cd341-83dc-4614-9315-134e16b3e949")
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSearchList: builder.query<PlayerList, {search?: string, cursor?: number, per_page?: number, first_name?: string, last_name?: string}>({
            query: ({search, cursor, per_page, first_name, last_name}) => ({
                url: `players?${first_name ? 'first_name=' + first_name : ''}${last_name ? '&last_name=' + last_name : ''}${search ? 'search=' + search : ""}`,
                method: 'GET',
            })
        }),
        getPlayerStats: builder.query<PlayerStats, {season: Number, player_ids: Number[]}>({
            query: ({season, player_ids}) => ({
                url: `season_averages?season=${season}&player_ids[]=${player_ids[0]}&player_ids[]=${player_ids[1]}`,
                method: 'GET'
            })
        })
    }),
});

export const {useGetSearchListQuery, useLazyGetSearchListQuery, useGetPlayerStatsQuery, useLazyGetPlayerStatsQuery} = playerApi;