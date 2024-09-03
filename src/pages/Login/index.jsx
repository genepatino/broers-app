import { DivContainer, LayoutContainer } from "./styled";
import deadpool from "../../../src/images/deadpool.jpg";
import { FormContainer } from "../../components/FormContainer";
import { SectionLogin } from "../../components/FormContainer/styled";

function Login() {
  return (
    <LayoutContainer>
      <DivContainer>
        <section className="section-img--hero">
          <figure>
            <img src={deadpool} alt="imagen de deadpool" />
          </figure>
        </section>
        <SectionLogin>
          <h1>Bienvenido a Marvel Portal</h1>
          <p>
            Ingresa tu usuario y contraseña para consultar a tus favoritos de
            Marvel.
          </p>
          <FormContainer />
        </SectionLogin>
      </DivContainer>
    </LayoutContainer>
  );
}

export { Login };
