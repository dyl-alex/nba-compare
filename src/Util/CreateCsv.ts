import * as d3 from "d3";

export const createCsv = async (playerOne: string, playerTwo: string) => {
    const data = await d3.csv('./NBA_Player_IDs.csv');
    const selectedOne = data[data.map(function (item) { return item.Name; }).indexOf(playerOne)];
    const selectedTwo = data[data.map(function (item) { return item.Name; }).indexOf(playerTwo)];
    
    return [selectedOne, selectedTwo]
        
}