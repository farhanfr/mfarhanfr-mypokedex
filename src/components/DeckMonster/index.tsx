import React, { useEffect, useState } from 'react'
import { Col, Grid, Row, Pagination, FlexboxGrid, Container, Loader, Button } from 'rsuite'
import CardMonster from '../CardMonster'
import { useNavigate } from 'react-router-dom'
import { fetchPokemonByType, fetchPokemonList } from '../../api/PokemonApi'
import { Monster } from '../../types/Monster'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { fetchPokemonMonster, setLoadingPokemonSlice } from '../../store/pokemonSlice'

const DeckMonster = () => {
    const navigate = useNavigate()

    const pokemonMonsterByType = useSelector((state: RootState) => state.pokemon.pokemonMonsterList)
    const loadingPokemonSlice = useSelector((state: RootState) => state.pokemon.loadingPokemonSlice)
    const pokemonDetail = useSelector((state: RootState) => state.pokemon.pokemonMonsterObject)

    const [pokemonList, setPokemonList] = useState<Monster[]>([])
    const [loading, setLoading] = useState(false)

    //pagination
    const [activePage, setActivePage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)


    const handleFetchPokemonList = async (page: number) => {
        setActivePage(page)
        setLoading(true)
        try {
            const result = await fetchPokemonList(page)
            console.log(result)
            setPokemonList(result)
            setTotalPage(1302)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        handleFetchPokemonList(1)
    }, [])


    return (
        <div>

            <Grid>
                <Row >
                    {
                        loading || loadingPokemonSlice ?
                            <center>
                                <Loader size='md' content="loading" />
                            </center>
                            :
                            pokemonDetail != undefined ?
                                <Col xl={8} >
                                    <CardMonster monster={pokemonDetail} handleClick={() => {
                                        navigate(`/detail/${pokemonDetail.name}`)
                                    }} />
                                </Col>
                                :
                                pokemonMonsterByType.length > 0 ?
                                    pokemonMonsterByType.map((value, index) => (
                                        <Col xl={8} key={index}>
                                            <CardMonster monster={value} handleClick={() => {
                                                navigate(`/detail/${index}`)
                                            }} />
                                        </Col>
                                    ))
                                    :
                                    pokemonMonsterByType.length == 0 ?
                                        <h3>Pokemon monster not found</h3>
                                        :
                                        pokemonDetail == undefined ?
                                            <h3>Pokemon monster not found</h3>
                                            :
                                            pokemonList.map((value, index) => (
                                                <Col xl={8} key={index}>
                                                    <CardMonster monster={value} handleClick={() => {
                                                        navigate(`/detail/${index}`)
                                                    }} />
                                                </Col>
                                            ))
                    }

                </Row>
            </Grid>
            {
                pokemonDetail == undefined ?
                    <FlexboxGrid justify='center'>
                        <Pagination
                            prev
                            next
                            size="md"
                            ellipsis
                            maxButtons={5}
                            total={totalPage}
                            activePage={activePage}
                            // onSelect={(value) => { console.log(value) }}
                            onChangePage={(value) => {
                                handleFetchPokemonList(value)
                            }}
                        />
                    </FlexboxGrid> : <></>
            }


        </div>
    )
}

export default DeckMonster