import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Pokemon() {
  const location = useLocation();
  const { pokemon } = location.state;

  const [imageIndex, setimageIndex] = useState(0);

  console.log(pokemon);

  const PokeImage = [
    pokemon?.sprites?.other?.dream_world?.front_default,
    pokemon?.sprites?.front_default,
    pokemon?.sprites?.front_shiny,
    pokemon?.sprites?.other?.official_artwork?.front_default,
    pokemon?.sprites?.other?.home?.front_default,
    pokemon?.sprites?.other?.official_artwork?.front_shiny,
    pokemon?.sprites?.other?.home?.front_shiny,
    pokemon?.sprites?.front_female,
  ].filter(Boolean);

  const prevImage = () => {
    setimageIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : PokeImage.length - 1;
      return newIndex;
    });
  };

  const nextImage = () => {
    setimageIndex((prevIndex) => {
      const newIndex = prevIndex < PokeImage.length - 1 ? prevIndex + 1 : 0;
      return newIndex;
    });
  };

  return (
    <div className="bg-gray-800 h-screen flex justify-center">
      <div className="flex flex-col items-center gap-4 mt-12">
        {/* Name */}
        <h1 className="text-white font-mono text-2xl mr-8 text-center select-none capitalize">
          {pokemon.name}
        </h1>

        {/* Horizontal Row for Image and Arrows */}
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <FaArrowLeft
            onClick={prevImage}
            className="text-6xl text-slate-400 cursor-pointer mr-9 hover:text-white"
          />

          {/* Image */}
          <div className="h-80 w-80">
            <img
              src={PokeImage[imageIndex]}
              className="object-contain w-full h-full select-none"
              alt={pokemon.name}
            />
          </div>

          {/* Right Arrow */}
          <FaArrowRight
            onClick={nextImage}
            className="text-6xl text-slate-400 ml-9 cursor-pointer hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
