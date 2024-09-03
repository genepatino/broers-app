import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
  width: 500px;
  height: 600px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .figure_container{
    width:100%;
    height: 400px;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      filter: drop-shadow(0 02px 6px rgba(0, 0, 0, 0.9));
    }
  }

  .description-container{
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    gap: 24px;

    .name{
      font-size: 1.8rem;
      font-weight: bold;
      letter-spacing: .06rem;
    }

    .description{
      font-size: 1.6rem;
      letter-spacing: .03rem;
    }
  }

`;

