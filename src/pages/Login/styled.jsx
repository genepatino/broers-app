import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`
export const DivContainer = styled.div`
  height: 700px;
  box-shadow: 1px -3px 20px 0px #cbaeae96;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 1.2fr 1.5fr;

  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;

  .section-img--hero{
    figure{
      display: flex;
    align-items: center;
    justify-content: center;
      img{
        object-fit: cover;
        width: 100%;
        height: 700px;
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
        filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7));
      }
    }
  }
`