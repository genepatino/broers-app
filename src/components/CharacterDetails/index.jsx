import { useContext } from "react";
import { CardContainer } from "./styled";
import { GlobalState } from "../../context";

function CharacterDetails() {
  const { character } = useContext(GlobalState);

  console.log(character);

  return (
    <>
      {character.map((item) => {
        const imageUrl = `${item.thumbnail.path}.${item.thumbnail.extension}`;
        return (
          <CardContainer key={item.id}>
            <figure className="figure_container">
              <img src={imageUrl} alt={item.name} />
            </figure>
            <section className="description-container">
              <p className="name">{item.name}</p>
              {item.description !== "" ? (
                <p className="description">{item.description}</p>
              ) : (
                <p className="description">
                  ¡Lo sentimos, no tenemos información sobre {item.name}!
                </p>
              )}
            </section>
          </CardContainer>
        );
      })}
    </>
  );
}

export { CharacterDetails };
