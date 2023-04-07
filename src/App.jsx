import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import PokemonBox from "./components/pokemonBox"
import PokedexPage from "./components/PokedexPage";
import PokemonPage from "./components/PokemonPage";

const App = () => {

  return (
    <BrowserRouter>

      <PokemonBox />
      <Routes>
        <Route path="/" element={<PokemonPage />}>

          <Route index element={<Navigate to="1" replace />} />

          <Route path=":id" element={<PokedexPage />} />

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
