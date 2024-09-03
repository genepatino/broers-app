import styled from "styled-components";

export const SectionLogin = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 60px;
  padding-top: 70px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 40px;
    letter-spacing: 0.22rem;
    font-family: system-ui;
  }
  p {
    font-size: 1.4rem;
    font-family: system-ui;
  }
  .login-form {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .label-item {
    text-align: start;
  }
  .btn-submit {
    background-color: #891212e3;
    padding: 18px 32px;
  }

  .btn-submit:hover {
    background-color: #891212e3 !important;
  }
`;
