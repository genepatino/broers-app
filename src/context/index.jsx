import { createContext, useState } from "react";

export const GlobalState = createContext();

export const GlobalStateProvider = ({children}) => {

  const [captcha, setCaptcha] = useState(null)
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState([])

  return (
    <GlobalState.Provider 
    value={{
      captcha, 
      setCaptcha,
      characters, 
      setCharacters,
      character, 
      setCharacter
    }}>
      {children}
    </GlobalState.Provider>
  )
}