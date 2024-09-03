import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PUBLIC_API_KEY,
  API_URL,
  timestamp,
  hash,
} from "../../utils/constants";
import md5 from "md5";
import { GlobalState } from "../../context";
import { LayoutContainer } from "../Login/styled";
import { CharacterDetails } from "../../components/CharacterDetails";

function Character() {
  const { id } = useParams();

  const { setCharacter } = useContext(GlobalState);

  useEffect(() => {
    const getCharacter = async () => {
      const url = `${API_URL}/v1/public/characters/${id}?apikey=${PUBLIC_API_KEY}&ts=${timestamp}&hash=${md5(
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
        console.log("data.data.results> ", data.data.results);

        setCharacter(data.data.results[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getCharacter();

    return () => {
      setCharacter(null);
    };
  }, [id, setCharacter]);

  return (
    <LayoutContainer>
      <CharacterDetails />
    </LayoutContainer>
  );
}

export { Character };
