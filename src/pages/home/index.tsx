import React from 'react'
import { FlexboxGrid, Text } from 'rsuite'
import CatalogMonster from '../../components/CatalogMonster'

const HomePage = () => {
    return (
        <div className='show-grid'>
            <Text align='center' weight='bold' size="2rem"> Pokedex</Text>
            <CatalogMonster />
        </div>
    )
}

export default HomePage