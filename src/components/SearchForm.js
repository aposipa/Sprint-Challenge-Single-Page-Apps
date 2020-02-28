import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const TextColor = styled.p`
  color: blue;
`
const TitleColor = styled.h2`
  color: red;
`


export default function SearchForm() {
 
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
      const characters = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("rick and morty characters", response);
      setData(characters);
    });
  }, [query]);

const handleInputChange = event => {
  setQuery(event.target.value);
};
  return (
    <section className="search-form">
     {/* // Add a search form here */}
     <form className="search">
       <input 
       type="text"
       onChange={handleInputChange}
       value={query}
       name="name"
       tabIndex="0"
       className="prompt search-name"
       placeholder="search by name"
       autoComplete="off"
       />
     </form>
     <div>
      {data.map(data =>{
        return(
          <div>
          <TitleColor>
          {data.name}
          </TitleColor>
          <TextColor>
          Status: {data.status}<br/>
          Species: {data.species}<br/>
          Type: {data.type}<br/>
          </TextColor>
          </div>
        )
      })}
     </div>
    </section>
  );
}
