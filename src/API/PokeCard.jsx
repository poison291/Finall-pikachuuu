import React from "react";
import { useNavigate } from "react-router-dom";

export default function PokeCard({ pokemon, index }) {
  const navigate = useNavigate();
  const id = index + 1;
  const handleScene = () => {
    navigate(`/pokemon/${id}`, {
      state: { pokemon, id },
    });
  };
  console.log(pokemon);
  return (
    <>
      <div
        onClick={handleScene}
        className="w-80 bg-gray-800 hover:bg-gray-700   transition-transform duration-300 ease-in-out hover:scale-105 h-auto rounded-2xl border-teal-600 border-2"
      >
        {/* Header section */}
        <div className=" bg-teal-500 flex justify-between  py-1.5 rounded-t-2xl mt-3   mx-4 font-bold font-sans">
          <h1 className=" text-white mx-2 capitalize">{pokemon.name}</h1>
          <div className="id">
            <h1 className=" text-gray-900 mx-2 hover:bg-gray-300 bg-white px-4 rounded-2xl">
              #{id}
            </h1>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center mt-5 select-none">
          <div className="w-56 h-56 overflow-hidden rounded-md saturate-150">
            <img
              className="object-contain w-full h-full"
              src={
                pokemon?.sprites?.other?.dream_world?.front_default ||
                pokemon?.sprites?.front_default
              }
              alt={pokemon.name}
            />
          </div>
        </div>
        {/* Type Section */}
        <div className="my-5 text-gray-400 pt-8 ">
          <h2>
            {pokemon?.types?.[0]?.type?.name}
            {pokemon?.types?.[1]?.type?.name
              ? `, ${pokemon?.types[1]?.type?.name}`
              : ""}
          </h2>
        </div>
      </div>
    </>
  );
}
