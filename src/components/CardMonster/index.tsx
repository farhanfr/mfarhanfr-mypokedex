import React from 'react'
import { Panel, Text } from 'rsuite'
import { Monster } from '../../types/Monster'

type CardMonsterProps ={
  monster:Monster
  handleClick:()=>void
  
}

const CardMonster = (props:CardMonsterProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.monster.id}.png`;
  return (
    <div>
      <Panel shaded onClick={props.handleClick}>
        <center><img src={imgUrl} width={100}/></center>
        <div>
        <Text size={20} align='center' weight='bold'>{props.monster.name}</Text>
        </div>
      </Panel>
    </div>
  )
}

export default CardMonster