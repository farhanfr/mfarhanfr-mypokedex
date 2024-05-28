import React from 'react'
import { Panel } from 'rsuite'

type CardMonsterProps ={
  handleClick:()=>void
}

const CardMonster = (props:CardMonsterProps) => {

  return (
    <div>
      <Panel shaded onClick={props.handleClick}>
        asa
      </Panel>
    </div>
  )
}

export default CardMonster