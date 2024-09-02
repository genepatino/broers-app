import { BrowserRouter, useRoutes } from "react-router-dom";
import { Login } from "../../components/Login";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    /* { path: "/:category", element: <Home /> },
    { path: "/product/:id", element: <ProductDetails /> },
    { path: "/order-summary", element: <OrderSummary /> },
    { path: "/*", element: <NotFound /> }, */
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}


export default App;
