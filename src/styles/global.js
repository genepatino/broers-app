import { createGlobalStyle } from "styled-components";

export const colors = {
  green: "#3a5a40",
  buttongreen: "#335339",
  lightgray: "#e5e5e573",
  yellow: "#F4CE68",
  salmon: "#dfc1aa",
  ligthred: "#b03a3a",
  gray: "#b9afaf",
  blue: "#3483fa",
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

.loader {
  display: inline-flex;
  gap: 10px;
}
.loader:before,
.loader:after {
  content: "";
  height: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    linear-gradient(#222 0 0) top/100% 40% no-repeat,
    radial-gradient(farthest-side,#000 95%,#0000) 50%/8px 8px no-repeat
    #fff;
  animation: l7 1.5s infinite alternate ease-in;
}
@keyframes l7 {
  0%,
  70% {background-size:100% 40%,8px 8px}
  85% {background-size:100% 120%,8px 8px}
  100% {background-size:100% 40%,8px 8px}
}

.p-link:hover{
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px
}
`;
