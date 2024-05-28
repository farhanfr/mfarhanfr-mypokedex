import React from 'react'
import { FlexboxGrid, Panel, Text } from 'rsuite'
import { MonsterType } from '../../types/MonsterType'
import { TypeColor } from '../../types/TypeColor'

type CardMonsterTypeProps = {
 color:string
  data: MonsterType
  handleClick: () => void

}

const CardMonsterType = (props: CardMonsterTypeProps) => {

  return (
    <div>
      <Panel bordered onClick={props.handleClick} style={{backgroundColor: props.color}}>
        <FlexboxGrid justify='center'>    
          {/* <FlexboxGrid.Item colspan={6}>
            asas
          </FlexboxGrid.Item>
          <div style={{ width: '20px' }}></div>
          <FlexboxGrid.Item colspan={6}>
            {props.data.name}
          </FlexboxGrid.Item> */}
          <FlexboxGrid.Item colspan={8}>
            <img src={`./images/monster-type/${props.data.name}.svg`}/>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <Text weight='bold' style={{color:'white'}}>{props.data.name}</Text>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
    </div>
  )
}

export default CardMonsterType