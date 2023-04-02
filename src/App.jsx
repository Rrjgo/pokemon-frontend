import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import PokemonBox from "./components/pokemonBox"
import PokedexLayout from "./components/PokedexLayout";
import PokedexPage from "./components/PokedexPage";

const App = () => {

  return (
    <BrowserRouter>

      <PokemonBox />
      <Routes>
        <Route path="/" element={<PokedexLayout />}>

          <Route index element={<Navigate to="1" replace />} />

          <Route path=":id" element={<PokedexPage />} />

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
