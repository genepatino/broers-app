import { BrowserRouter, useRoutes } from "react-router-dom";
import { Login } from "../Login";
import { MarvelCharacters } from "../MarvelCharacters";
import { GlobalStyle } from "../../styles/global";
import { Character } from "../Character";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/marvelcharacters", element: <MarvelCharacters /> },
    { path: "/character/:id", element: <Character /> }
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes />
    </BrowserRouter>
  );
}


export default App;
