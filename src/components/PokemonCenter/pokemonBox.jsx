
import React from "react"
import PokemonCanvas from './canvas/Pokemon';

const PokemonBox = () => {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            width: "100vw",
            height: "360px",
            backgroundColor: "pink",
        }}>
            <PokemonCanvas />
        </div >
    )

}

export default PokemonBox