import { useEffect, useState } from 'react';
import styles from './AddPokemon.module.css';
import usePost from '../utils/usePost';
import useGet from '../utils/useGet';

export default function AddPokemon() {
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [dexEntry, setDexEntry] = useState('');

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';
    const initialState = { loading: false, data: null, error: null };

    const { data: pokemonList, loading, error } = useGet(`${API_BASE_URL}/api/pokemon`, [])


    useEffect(() => {
        if (pokemonList !== null) {
            setId(pokemonList.length + 1);
        }
    }, [pokemonList]);

    const [postState, postData] = usePost(`${API_BASE_URL}/api/pokemon/add`, initialState);





    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ id, name, imageUrl, dexEntry });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                </label>
                <br />
                <label>
                    Dex Entry:
                    <textarea value={dexEntry} onChange={(e) => setDexEntry(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Add Pokemon</button>
            </form>
            {postState.loading && <p>Loading...</p>}
            {postState.error && <p>Error: {postState.error.message}</p>}
            {postState.data && <p>Pokemon added successfully!</p>}
        </>
    );
};
