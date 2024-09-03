import { createGlobalStyle } from "styled-components";

export const colors = {
  green: "#3a5a40",
  buttongreen: "#335339",
  lightgray: "#e5e5e573",
  yellow: "#F4CE68",
  salmon: "#dfc1aa",
  ligthred: "#b03a3a",
  gray: "#b9afaf",
  blue: "#3483fa"
};


export const GlobalStyle = createGlobalStyle`

*::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color:white;
    border-radius: 5px;
  }
  
  *::-webkit-scrollbar-track {
    background-color:white;
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};
    border-radius: 5px;
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  
  body{
    background-color: #632929;
    max-width: 1400px;
    min-width: 800px;
    margin: 0 auto;
  };

  html{
    font-size: 62.5%;
    font-family: sans-serif;
  }

  .table-container{
    width: 80%;
    max-height: 640px;
    overflow-y: auto;
  }

  table {
  width: 100%;
  background-color: white;
  border-collapse: collapse;
  box-shadow: -1px 1px 5px 4px #00000069;
}


  th, td {
    border: 8px solid #ddd;
    padding: 16px;
    font-size: 1.4rem;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
  }

  .spinner {
   width: 56px;
   height: 56px;
   display: grid;
   border-radius: 50%;
   -webkit-mask: radial-gradient(farthest-side,#0000 40%,#474bff 41%);
   background: linear-gradient(0deg ,rgba(71,75,255,0.5) 50%,rgba(71,75,255,1) 0) center/4.5px 100%,
  linear-gradient(90deg,rgba(71,75,255,0.25) 50%,rgba(71,75,255,0.75) 0) center/100% 4.5px;
   background-repeat: no-repeat;
   animation: spinner-d3o0rx 1s infinite steps(12);
}

.spinner::before,
.spinner::after {
   content: "";
   grid-area: 1/1;
   border-radius: 50%;
   background: inherit;
   opacity: 0.915;
   transform: rotate(30deg);
}

.spinner::after {
   opacity: 0.83;
   transform: rotate(60deg);
}

@keyframes spinner-d3o0rx {
   100% {
      transform: rotate(1turn);
   }
}

.p-link:hover{
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px
}
`;
