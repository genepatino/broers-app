import styled from "styled-components";

export const SectionLogin = styled.section`
    background-color: #804444ed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 60px;

    h1{
      font-size: 3rem;
      margin: 40px 0 14px 0;
    }
    p{
      font-size: 1.4rem;
    }
    .login-form{
      width: 100%;
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .label-item{
      text-align: start;
    }
`