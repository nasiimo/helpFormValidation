import { useState, useEffect } from "react";
import { API } from "../../constants/api";
import CharacterItem from "./CharacterItem";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);
        const json = await response.json();
        setCharacters(json.results);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured</div>;
  }

  return (
    <div className="character-container">
      {characters.map(function (character) {
        const { id, name, status } = character;
        return <CharacterItem key={id} id={id} name={name} status={status} />;
      })}
    </div>
  );
}

export default CharacterList;
