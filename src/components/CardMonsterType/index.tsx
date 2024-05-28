import React from 'react'
import { FlexboxGrid, Panel } from 'rsuite'

const CardMonsterType = () => {
  return (
    <div>
      <Panel bordered>
        <FlexboxGrid justify='center'>
          <FlexboxGrid.Item colspan={6}>
            asas
          </FlexboxGrid.Item>
          <div style={{ width: '20px' }}></div>
          <FlexboxGrid.Item colspan={6}>
            Earth
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
    </div>
  )
}

export default CardMonsterType