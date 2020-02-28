import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const TextColor = styled.p`
  color: blue;
`
const TitleColor = styled.h2`
  color: red;
`

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log("character list log!", response)
      setCharacter(response.data.results);
    })
    .catch(error => {
      console.error("server error!", error);
    });
  

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
     {character.map(data => {
        return (
          <div>
          <TitleColor>
          <h2>Name: {data.name}</h2>
          </TitleColor>
          <TextColor>
          <p>Status: {data.status}</p>
          <p>Species: {data.species}</p>
          <p>Type: {data.type}</p>
          </TextColor>
          </div>
        )
      })}
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    </section>
  );
}
