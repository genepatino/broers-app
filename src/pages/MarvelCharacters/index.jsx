import { useEffect, useState } from "react"
import md5 from 'md5';
import { PRIVATE_API_KEY, PUBLIC_API_KEY, API_URL } from "../../utils/constants";
import { CharactersTable } from "../../components/CharactersTable";

function MarvelCharacters() {
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    const getAllCharacters = async () => {
    const timestamp = Date.now().toString();
    const hash = md5(timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY);
    const url = `${API_URL}/v1/public/characters?apikey=${PUBLIC_API_KEY}&ts=${timestamp}&hash=${hash}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': '*/*'
        }
      });
      const data = await response.json();
      setCharacters(data.data.results);
    } catch (error) {
      console.error('Error:', error);
    }
    };
    getAllCharacters();
  }, []);
  return (
    <CharactersTable data={characters}/>
  )
}

export { MarvelCharacters }