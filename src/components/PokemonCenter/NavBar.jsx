import React, { forwardRef } from 'react';

const NavBar = forwardRef((props, ref) => {

    return (
        <div ref={ref}>
            <button>Home</button>
            <button>Pokemons</button>
            <button>Shop</button>
            <button>Heal</button>
            <button>Exchange</button>
        </div>
    );
});

export default NavBar;
