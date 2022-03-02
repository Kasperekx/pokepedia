import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Pokemon = () => {
    const params = useParams()
    const [pokemonInfo, setPokemonInfo] = useState([])

    const getPokemonData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        const data = await response.json()
        setPokemonInfo(data)
    }

    useEffect(() => {
        getPokemonData()
    },[])


    return (
        <div>
            <h1 className="capitalize">{pokemonInfo.name}</h1>
        </div>
    );
};

export default Pokemon;