import SearchIcon from '@rsuite/icons/Search';
import { useState } from 'react';
import { Input, InputGroup } from 'rsuite'
import { Monster } from '../../types/Monster';
import { fetchPokemonDetail } from '../../api/PokemonApi';
import { useDispatch } from 'react-redux';
import { fetchPokemonMonsterDetail, setLoadingPokemonSlice } from '../../store/pokemonSlice';

type CustomChangeEvent = React.ChangeEvent<HTMLInputElement>;

const SearchInputMonster = () => {

    const dispatch = useDispatch()

    const [keyword,setKeyword] = useState("")

    const handleFetchDetail = async() =>{
        dispatch(setLoadingPokemonSlice())
        try {
            const result = await fetchPokemonDetail(keyword)
            dispatch(fetchPokemonMonsterDetail(result.data))
        } catch (error) {
            dispatch(fetchPokemonMonsterDetail(undefined))
            console.log("error")
        }
        
    }

    return (
        <>
            <InputGroup>
                <Input placeholder='Enter name pokemon' name='' onChange={(val, evt) => {
                    setKeyword(val)
                }} onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                       handleFetchDetail()
                    }
                }} />
                <InputGroup.Addon>
                    <SearchIcon />
                </InputGroup.Addon>
            </InputGroup>
        </>
    )
}

export default SearchInputMonster