import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPokemonDetail } from '../../api/PokemonApi'
import { Monster } from '../../types/Monster'
import { Loader } from 'rsuite'

const DetailPage = () => {
  let{namePokemon} = useParams()

  const[pokemon,setPokemon] = useState<Monster>()
  const[loading,setLoading] = useState(false)

  const handleFetchDetail = async() =>{
    setLoading(true)
    try {
        const result = await fetchPokemonDetail(namePokemon ?? "")
        setPokemon(result.data)
        setLoading(false)
    } catch (error) {
        alert("Pokemon monster not found")
        console.log("error")
    }   
}

useEffect(() => {
  handleFetchDetail()
}, [])

  return (
    <div>
      {
        loading ? <center>
        <Loader size='md' content="loading" />
    </center> : 
      <>{pokemon?.name}</>
      }
    </div>
  )
}

export default DetailPage