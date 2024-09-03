import { useContext, useEffect } from "react";
import {
  PUBLIC_API_KEY,
  API_URL,
  timestamp,
  hash,
} from "../../utils/constants";
import { CharactersTable } from "../../components/CharactersTable";
import md5 from "md5";
import { GlobalState } from "../../context";

function MarvelCharacters() {
  const { characters, setCharacters } = useContext(GlobalState);

  useEffect(() => {
    const getAllCharacters = async () => {
      const url = `${API_URL}/v1/public/characters?apikey=${PUBLIC_API_KEY}&ts=${timestamp}&hash=${md5(
        hash
      )}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "*/*",
          },
        });
        const data = await response.json();
        setCharacters(data.data.results);

        console.log(characters);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getAllCharacters();
  }, []);
  return <CharactersTable />;
}

export { MarvelCharacters };
