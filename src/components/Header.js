import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  box-shadow: 5px 10px black;
  background-color: darkcyan;
  color: azure;
  border-radius: 10px
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to ="/">
      <Button>Home</Button>
      </Link>
      <Link to ="/characters">
        <Button>Characters</Button>
      </Link>
    </header>
  );
}
