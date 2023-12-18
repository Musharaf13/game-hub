import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Genre from "./components/genre";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
// import {genres} from "./data/constants";

function App() {
  const [genre, setGenre] = useState<string | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"Nav" "Main"`,
        lg: `"Nav Nav" "Aside Main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="Nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="Aside" bg="black">
          <GenresList selectGenre={(value) => setGenre(value)} />
        </GridItem>
      </Show>
      <GridItem area="Main" bg="black">
        <GamesGrid selectGenre={genre} />
      </GridItem>
    </Grid>
  );
}

export default App;
