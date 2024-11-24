import React, { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import PokeCard from "./PokeCard";

export default function PokeFetch() {
  const [search, setsearch] = useState('')
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isFetching, setIsFetching] = useState(false); 
  const limit = 20;

  const fetchPokeInt = async () => {
    setIsFetching(true); 
    try {
      const API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response = await fetch(API);
      const data = await response.json();

      
      const detailFetched = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailData = await fetch(pokemon.url);
          return await detailData.json();
        })
      );

      setPokemon((prevPokemon) => [...prevPokemon, ...detailFetched]); 
      setLoading(false);
      setIsFetching(false);
    } catch (error) {
      console.log(error.message);
      setIsFetching(false); 
    }
  };

  useEffect(() => {
    fetchPokeInt();
  }, [offset]);

  
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!isFetching) {
        setOffset((prevOffset) => prevOffset + limit);
      }
    }
  };

  // const searchData =pokemon.filter((pokemon) =>
  //   pokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
  // ) 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <>
         <div className="flex justify-center items-center  mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search for a Pokémon..."
          className="p-4 mt-5 w-96 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
        />
      </div>
      <div className="text-center font-bold font-mono pt-9 pb-9">
        <div className="flex flex-wrap gap-4 justify-around">
          {pokemon.map((poke, index) => (
            <div key={poke.id}>
              <PokeCard pokemon={poke} index={index}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
