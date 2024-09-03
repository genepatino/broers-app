import { useContext } from "react";
import { CardContainer } from "./styled";
import { GlobalState } from "../../context";
import { Loader } from "../Loader";
import { pathOr, hasPath } from "ramda";

function CharacterDetails() {
  const { character } = useContext(GlobalState);

  return (
    <>
      {hasPath(["name"], character) ? (
        <CardContainer>
          <figure className="figure_container">
            <img
              src={`${pathOr("", ["thumbnail", "path"], character)}.${pathOr(
                "",
                ["thumbnail", "extension"],
                character
              )}`}
              alt={pathOr("", ["name"], character)}
            />
          </figure>
          <section className="description-container">
            <p className="name">{pathOr("", ["name"], character)}</p>

            {character.description !== "" ? (
              <p className="description">{character.description}</p>
            ) : (
              <p className="description">
                ¡Lo sentimos, no tenemos información sobre {character.name}!
              </p>
            )}
          </section>
        </CardContainer>
      ) : (
        <Loader />
      )}
    </>
  );
}

export { CharacterDetails };
