import React from 'react';
import { Link } from "react-router-dom";

const PokemonTile = ({id, image, name, type}) => {
    return (

        <div className="hover:animate-pulse sm:w-12/12 xl:w-3/12 shadow-lg  text-center bg-gray-100 p-6 rounded">
            <Link className="w-12/12" to={'/pokepedia/pokemon/' + id}>
            <img className="h-44 m-auto" src={image} alt={name} />
            <div className="detail-wrapper ">
                <div className="primary-info flex justify-center mt-6 mb-2">
                    <div className="number pr-2"><strong>#0{id}</strong></div>
                    <h3 className="capitalize">{name}</h3>

                </div>
                <div className="capitalize">Type: {type}</div>
            </div>   </Link>

        </div>

    );
};

export default PokemonTile;