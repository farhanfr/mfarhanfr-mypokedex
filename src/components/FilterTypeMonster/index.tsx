import React, { useEffect, useState } from 'react'
import { Col, Grid, Loader, Row, Text } from 'rsuite'
import CardMonsterType from '../CardMonsterType'
import { MonsterType } from '../../types/MonsterType'
import { fetchPokemonByType, fetchPokemonType } from '../../api/PokemonApi'
import { useDispatch } from 'react-redux'
import { fetchPokemonMonster, setLoadingPokemonSlice, setPokemonTypeSelected } from '../../store/pokemonSlice'
import { Monster } from '../../types/Monster'
import { TypeColor } from '../../types/TypeColor'

const FilterTypeMonster = () => {

    const dispatch = useDispatch()

    const [listMonsterType, setListMonsterType] = useState<MonsterType[]>([])
    const [loading, setLoading] = useState(false)

    const handleFetchType = async () => {
        setLoading(true)
        try {
            const result = await fetchPokemonType()
            console.log(result)
            setListMonsterType(result.data.results)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const handleFetchPokemonType = async (typeMonster:string) => {
        dispatch(setLoadingPokemonSlice())
        try {
            const result = await fetchPokemonByType(typeMonster)
            if (result.length > 0) {
                dispatch(fetchPokemonMonster(result))
            }else{
                alert("Pokemon monster not found")
            }
            
            dispatch(setPokemonTypeSelected(typeMonster))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFetchType()
    }, [])


    return (
        <div>
            <Grid>
                <Row gutter={10}>
                    {
                        loading ?
                            <center>
                                <Loader size='md' content="loading" />
                            </center>
                            :
                            listMonsterType?.map((value, index) => (
                                <Col xl={6} key={index}><CardMonsterType color={TypeColor[index]?.color} data={value} handleClick={() => {
                                    handleFetchPokemonType(value.name)

                                }} /></Col>
                            ))
                    }
                    {/* {Array.from({ length: 8 }).map((_, idx) => (
                        <Col xl={6} ><CardMonsterType /></Col>
                    ))} */}
                </Row>
            </Grid>
        </div>
    )
}

export default FilterTypeMonster