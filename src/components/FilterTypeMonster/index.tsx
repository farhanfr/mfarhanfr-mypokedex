import React from 'react'
import { Col, Grid, Row, Text } from 'rsuite'
import CardMonsterType from '../CardMonsterType'

const FilterTypeMonster = () => {
    return (
        <div>
            <Grid>
                <Row gutter={10}>
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col xl={6} ><CardMonsterType /></Col>
                    ))}
                </Row>
            </Grid>
        </div>
    )
}

export default FilterTypeMonster