import { BrowserRouter } from "react-router-dom"
import PokemonBox from "./components/pokemonBox"

const App = () => {

  return (
    <BrowserRouter>
      <div >
        <PokemonBox />
      </div>
    </BrowserRouter>

  )
}

export default App
