import React from 'react'
import { FlexboxGrid, Panel } from 'rsuite'
import { MonsterType } from '../../types/MonsterType'

type CardMonsterTypeProps ={
  data:MonsterType
  handleClick:()=>void
  
}

const CardMonsterType = (props:CardMonsterTypeProps) => {
  return (
    <div>
      <Panel bordered onClick={props.handleClick}>
        <FlexboxGrid justify='center'>
          <FlexboxGrid.Item colspan={6}>
            asas
          </FlexboxGrid.Item>
          <div style={{ width: '20px' }}></div>
          <FlexboxGrid.Item colspan={6}>
            {props.data.name}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
    </div>
  )
}

export default CardMonsterType