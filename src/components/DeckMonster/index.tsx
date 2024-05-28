import React from 'react'
import { Col, Grid, Row, Pagination, FlexboxGrid } from 'rsuite'
import CardMonster from '../CardMonster'
import { useNavigate } from 'react-router-dom'

const DeckMonster = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Grid>
                <Row >
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col xl={8}>
                            <CardMonster handleClick={()=>{
                               navigate(`/detail/${idx}`)
                            }}/>
                        </Col>
                    ))}
                </Row>
            </Grid>
            <FlexboxGrid justify='center'>
            <Pagination
                prev
                next
                size="md"
                total={5}
                pages={5}
                activePage={2}
                onSelect={() => { console.log("Selected!") }}
            />
            </FlexboxGrid>
        </div>
    )
}

export default DeckMonster