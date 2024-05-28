import React from 'react'
import { FlexboxGrid, Text } from 'rsuite'
import CatalogMonster from '../../components/CatalogMonster'

const HomePage = () => {
    return (
        <div>
            <Text align='center' weight='bold' size={50}> Pokedex</Text>
            <CatalogMonster />
        </div>
    )
}

export default HomePage