import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  box-shadow: 5px 10px black;
  background-color: darkcyan;
  color: azure;
  border-radius: 10px
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <Link to ="/characters">
        <Button>Characters</Button>
      </Link>
    </section>
  );
}
