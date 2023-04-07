import { PokedexLayout } from "./PokedexLayout";
import AddPokemon from "./AddPokemon";
import useGet from '../utils/useGet';
import SearchPokemon from "./SearchPokemon";



export default function PokemonPage() {

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';
    const { data: pokemonList, loading, error } = useGet(`${API_BASE_URL}/api/pokemon`, [])

    return (
        <div>
            <PokedexLayout pokemonList={pokemonList} />
            <AddPokemon />
            <SearchPokemon />
        </div>
    );
}