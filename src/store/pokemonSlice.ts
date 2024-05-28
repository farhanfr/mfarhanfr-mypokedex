import { createSlice } from "@reduxjs/toolkit";
import { Monster } from "../types/Monster";


export interface PokemonState {
    value: number,
    loadingPokemonSlice: boolean,
    pokemonMonsterList:Monster[],
    pokemonMonsterObject?:Monster,
    pokemonTypeSelected:string
}

const initialState: PokemonState = {
    value: 0,
    loadingPokemonSlice: false,
    pokemonMonsterList: [],
    pokemonMonsterObject: undefined,
    pokemonTypeSelected:""
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setLoadingPokemonSlice:(state)=>{
            state.loadingPokemonSlice = true
        },
        setPokemonTypeSelected:(state,action)=>{
            state.pokemonTypeSelected = action.payload
        },
        fetchPokemonMonsterDetail:(state,action)=>{
            state.pokemonMonsterObject = action.payload
            state.loadingPokemonSlice = false
        },
        fetchPokemonMonster: (state,action) =>{
            state.pokemonMonsterList = action.payload
            state.loadingPokemonSlice = false
        }
    },

});

export const {fetchPokemonMonster,setLoadingPokemonSlice,setPokemonTypeSelected,fetchPokemonMonsterDetail } = pokemonSlice.actions;

export default pokemonSlice.reducer
