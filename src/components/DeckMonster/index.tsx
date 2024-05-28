import React, { useEffect, useState } from 'react'
import { Col, Grid, Row, Pagination, FlexboxGrid, Container, Loader } from 'rsuite'
import CardMonster from '../CardMonster'
import { useNavigate } from 'react-router-dom'
import { fetchPokemonList } from '../../api/PokemonApi'
import { Monster } from '../../types/Monster'

const DeckMonster = () => {
    const navigate = useNavigate()

    const [pokemonList, setPokemonList] = useState<Monster[]>([])
    const [loading, setLoading] = useState(false)
    
    const [activePage,setActivePage] = useState(1)
    const [totalPage,setTotalPage] = useState(0)

    const handleFetchPokemonList = async (page:number) => {
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
                        loading ?
                        <center>
                        <Loader size='md' content="loading"/>
                        </center>
                        :
                        pokemonList.map((value, index) => (
                            <Col xl={8} key={index}>
                                <CardMonster index={index} monster={value} handleClick={() => {
                                    navigate(`/detail/${index}`)
                                }} />
                            </Col>
                        ))
                    }
                  
                </Row>
            </Grid>
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
                    onChangePage={(value)=>{
                        handleFetchPokemonList(value)
                    }}
                />
            </FlexboxGrid>
        </div>
    )
}

export default DeckMonster