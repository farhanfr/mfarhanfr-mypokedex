import { Container, Content, Divider, FlexboxGrid, Input, InputGroup, Panel, Text } from 'rsuite'
import SearchInputMonster from '../SearchInputMonster'
import FilterTypeMonster from '../FilterTypeMonster'
import DeckMonster from '../DeckMonster'

const CatalogMonster = () => {
    return (
        <>
            <Container>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={15}>
                        <Panel shaded>
                            <SearchInputMonster />
                            <div style={{ height: '10px' }}></div>
                            <Text weight='bold'>Type Of Pokemon</Text>
                            <FilterTypeMonster />
                            <div style={{ height: '30px' }}></div>
                            <DeckMonster/>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Container>
        </>
    )
}

export default CatalogMonster