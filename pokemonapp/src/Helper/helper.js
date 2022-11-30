import { PokemonCard } from "../Component/PokemonCard";


export const type = ["Grass" , "Poison", "Fire", "Flying", "Water", "Bug", "Normal", "Electric" , "Psychic", "Fighting", "Rock", "Ground", "Ice", "Ghost"]


// Get All Pokemon Type
export function getAllPokemonTypes(list , prop){ 

    if(list) return [...new Set(list.map((item) => item[prop]))];
    else return [];
    
}

export function getListOfPokemonType(list , prop){

   const getList = list ? list.filter((item) => item.type.filter((item) => item == prop) == prop ) : []

   return getList;
}



export function getListOfPokemonWeakness(list , prop){

    const getList = list ? list.filter((item) => item.type.filter((item) => item == prop) == prop ) : []
 
    return getList;
 }
 

export function getAllPokemonWeakness(list , prop){

    if(list) return [...new Set(list.map((item) => item[prop]))];
    else return [];
 

 }
 
 