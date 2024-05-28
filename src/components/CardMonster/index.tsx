import React from 'react'
import { Panel } from 'rsuite'
import { Monster } from '../../types/Monster'

type CardMonsterProps ={
  index:number
  monster:Monster
  handleClick:()=>void
  
}

const CardMonster = (props:CardMonsterProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.monster.id}.png`;
  return (
    <div>
      <Panel shaded onClick={props.handleClick}>
        <img src={imgUrl}/>
        <div>
        {props.monster.name}
        </div>
      </Panel>
    </div>
  )
}

export default CardMonster