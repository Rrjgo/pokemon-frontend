import { NavLink, Outlet } from 'react-router-dom';
import styles from './PokedexLayout.module.css';

/**
 * Renders the layout of the page, including a list of pokemon on the left, and a main window on the right.
 * The main window contains an <Outlet> which is intended to render a PokedexPage inside, based on the route.
 */

export function PokedexLayout({ pokemonList }) {
    return (
        <div className={styles.container}>
            <div className={styles.dexContainer}>
                <PokemonList pokemonList={pokemonList} />
                <div className={styles.dexView}>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PokedexSearchLayout({ pokemonList }) {
    // Customize the layout as needed
    return (
        <div className={styles.container}>
            <div className={styles.dexContainer}>
                <PokemonList pokemonList={pokemonList} />
            </div>
        </div>
    );
}

/**
 * Renders a list of pokemon.
 */
function PokemonList({ pokemonList }) {

    // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';
    // const { data: pokemonList, loading, error } = useGet(`${API_BASE_URL}/api/pokemon`, [])

    return (
        <div className={styles.list}>
            <div>
                {pokemonList.map((pokemon) => (
                    <ListItem key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

/**
 * Renders a single pokemon in the list.
 */
function ListItem({ pokemon }) {

    return (
        <NavLink to={pokemon.id.toString()}
            className={({ isActive }) => isActive ? `${styles.listItem} ${styles.activeListItem}` : styles.listItem}>
            <img src="pokeball.png" />
            <span>{pokemon.name}</span>
        </NavLink>
    );
}