import { useState, useEffect } from "react";
import PokemonTile from "../components/PokemonTile/PokemonTile";
import NavBar from "../components/Nav/NavBar";
import { Outlet } from "react-router-dom";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadData, setLoadData] = useState("https://pokeapi.co/api/v2/pokemon");
  const [search, setSearch] = useState("");

  const getPokemons = async () => {
    const response = await fetch(loadData);
    const data = await response.json();

    await new Promise((resolve) => {
      setTimeout(resolve, 200);
    });

    setLoadData(data.next);

    const getPokemon = (result) => {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    };
    getPokemon(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <header className="p-6 bg-gray-100">
        <NavBar setSearch={setSearch} />
      </header>
      <Outlet />
      <div className="main-container sm:w-12/12 xl:w-10/12 m-auto text-center mb-20 mt-14 ">
        {allPokemons.length ? (
          <div>
            {" "}
            <div className="pokemons-container sm:block md:flex m-auto  items-center flex-wrap gap-6 justify-center">
              {allPokemons
                .filter((pokemon) =>
                  search === ""
                    ? pokemon
                    : pokemon.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((pokemonStats, index) => {
                  return (
                    <PokemonTile
                      key={index}
                      id={pokemonStats.id}
                      image={
                        pokemonStats.sprites.other.dream_world.front_default
                      }
                      name={pokemonStats.name}
                      type={pokemonStats.types[0].type.name}
                    />
                  );
                })}
            </div>{" "}
            <button
              className="flex justify-center mt-10 m-auto pt-2 pb-2 pl-4 pr-4 rounded border-2"
              onClick={() => getPokemons()}
            >
              Show more
            </button>
          </div>
        ) : (
          <div className="animate-spin h-60 w-60 rounded-full mt-60 m-auto border-4 border-t-cyan-300 "></div>
        )}
      </div>
    </>
  );
};

export default Pokedex;
