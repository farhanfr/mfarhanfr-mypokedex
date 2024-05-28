import React, { useEffect, useState } from 'react'
import { Col, Grid, Loader, Row, Text } from 'rsuite'
import CardMonsterType from '../CardMonsterType'
import { MonsterType } from '../../types/MonsterType'
import { fetchPokemonType } from '../../api/PokemonApi'

const FilterTypeMonster = () => {

    const [listMonsterType,setListMonsterType] = useState<MonsterType[]>([])
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
                        <Loader size='md' content="loading"/>
                        </center>
                        :
                        listMonsterType.map((value, index) => (
                            <Col xl={6} key={index}><CardMonsterType data={value}  handleClick={()=>{
                                alert("test")
                            }}/></Col>
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