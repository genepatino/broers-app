
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PUBLIC_API_KEY, API_URL, timestamp, hash } from "../../utils/constants";
import md5 from 'md5';
import { GlobalState } from "../../context";
import { LayoutContainer } from "../Login/styled";
import { CharacterDetails } from "../../components/CharacterDetails";

function Character (){
  const { id } = useParams()
  
  const { character, setCharacter } = useContext(GlobalState)

  useEffect(() => {
    const getAllCharacters = async () => {
    const url = `${API_URL}/v1/public/characters/${id}?apikey=${PUBLIC_API_KEY}&ts=${timestamp}&hash=${md5(hash)}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': '*/*'
        }
      });
      const data = await response.json();
      setCharacter(data.data.results);
      console.log(character);
      
    } catch (error) {
      console.error('Error:', error);
    }
    };
    getAllCharacters();
  }, [id]);


  return(
    <LayoutContainer>
      <CharacterDetails/>
    </LayoutContainer>
  )
}

export { Character }