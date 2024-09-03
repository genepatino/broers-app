import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../context";
import { LayoutContainer } from "../../pages/Login/styled";
import { Loader } from "../Loader";

function CharactersTable() {
  const { characters } = useContext(GlobalState);
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/character/${item}`);
  };

  return (
    <LayoutContainer>
      {characters.length > 0 ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Personajes Marvel</th>
                <th>Name</th>
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
                      <p
                        onClick={() => handleClick(item.id)}
                        target="_blank"
                        className="p-link"
                      >
                        {item.name}
                      </p>
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
