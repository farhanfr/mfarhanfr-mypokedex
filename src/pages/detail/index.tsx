import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPokemonDetail } from '../../api/PokemonApi'
import { Monster } from '../../types/Monster'
import { Col, Divider, FlexboxGrid, Grid, Loader, Panel, Row, Text } from 'rsuite'

const DetailPage = () => {
  let { namePokemon } = useParams()

  const [pokemon, setPokemon] = useState<Monster>()
  const [loading, setLoading] = useState(false)

  const handleFetchDetail = async () => {
    setLoading(true)
    try {
      const result = await fetchPokemonDetail(namePokemon ?? "")
      setPokemon(result.data)
      setLoading(false)
    } catch (error) {
      alert("Pokemon monster not found")
      console.log("error")
    }
  }

  useEffect(() => {
    handleFetchDetail()
  }, [])

  return (
    <div>
      {
        loading ? <center>
          <Loader size='md' content="loading" />
        </center> :
          <>
            <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={15}>
                        <Panel shaded>
                           <Grid fluid>
                                <Row>
                                  <Col md={12}>
                                    <Text size={40}>Monster Information</Text>
                                    <Divider/>
                                    <Text size={25} weight='bold'>{pokemon?.name}</Text>
                                    
                                    <Text size={25}>Height: {pokemon?.height} cm</Text>
                                    
                                    <Text size={25}>Health: {pokemon?.stats[0].base_stat} Hp</Text>
                                    
                                    <Text size={25}>Weight: {pokemon?.weight} Kg</Text>
                                  </Col>
                                  <Col md={812}>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon?.id}.png`} width={500}/>
                                  </Col>
                                </Row>
                           </Grid>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
          </>
      }
    </div>
  )
}

export default DetailPage