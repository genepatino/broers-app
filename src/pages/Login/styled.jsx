import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`
export const DivContainer = styled.div`
  height: 700px;
  box-shadow: -1px 1px 5px 0px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  .section-img--hero{
    figure{
      display: flex;
    align-items: center;
    justify-content: center;
      img{
        object-fit: cover;
        width: 100%;
        height: 700px;
        border-bottom-left-radius: 14px;
        border-top-left-radius: 14px;
      }
    }
  }
`