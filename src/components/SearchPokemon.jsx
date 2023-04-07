import React, { useState, useEffect } from 'react';
import useGet from '../utils/useGet';
import { PokedexSearchLayout } from "./PokedexLayout";

export default function SearchPokemon() {

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

    const [searchTerm, setSearchTerm] = useState('');
    const [url, setUrl] = useState(null);
    const { data: pokemonList, loading, error } = useGet(url);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleButtonClick = () => {
        setUrl(`${API_BASE_URL}/api/pokemon/name?name=${searchTerm}`);
    };


    return (
        <div>
            <input
                type="text"
                placeholder="Search Pokémon by name"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Search</button>
            {loading && <p>Loading...</p>}

            {pokemonList && <PokedexSearchLayout pokemonList={pokemonList} />}
        </div>
    );
};
