import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../context";
import { LayoutContainer } from "../../pages/Login/styled";
import { Loader } from "../Loader";

function CharactersTable() {
  const { characters } = useContext(GlobalState);

  return (
    <LayoutContainer>
      {characters.length > 0 ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Personajes Marvel</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((item) => {
                const imageUrl = `${item.thumbnail.path}.${item.thumbnail.extension}`;
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={imageUrl}
                        alt={item.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td>
                      <Link
                        to={`/character/${item.id}`}
                        target="_blank"
                        className="p-link"
                      >
                        {item.name}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Loader />
      )}
    </LayoutContainer>
  );
}

export { CharactersTable };
