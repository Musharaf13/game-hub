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
  return (
    <Grid
      templateAreas={{
        base: `"Nav" "Main"`,
        lg: `"Nav Nav" "Aside Main"`,
      }}
    >
      <GridItem area="Nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="Aside" bg="black">
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="Main" bg="black">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
