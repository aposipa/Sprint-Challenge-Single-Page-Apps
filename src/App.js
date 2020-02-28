import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path ="/" component={WelcomePage}/>
      <Route exact path ="/characters" component={SearchForm}/>
      {/* <Route path ="/characters/search" component={SearchForm}/> */}
    </main>
  );
}
