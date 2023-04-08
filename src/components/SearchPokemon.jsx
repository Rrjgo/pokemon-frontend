import React, { useState } from 'react';
import styles from './SearchPokemon.module.css';
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
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Search Pokemon by name"
                value={searchTerm}
                onChange={handleInputChange}
                className={styles.inputField}
            />
            <button onClick={handleButtonClick} className={styles.button}>Search</button>
            {loading && <p>Loading...</p>}
            {pokemonList && <PokedexSearchLayout pokemonList={pokemonList} />}
        </div>
    );
};
