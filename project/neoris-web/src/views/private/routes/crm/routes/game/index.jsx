import React, {Fragment} from "react";
import {Unity, useUnityContext} from "react-unity-webgl";
import { ButtonStyled } from "./elements";
import { useState } from "react";

const Game = ({user}) => {
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(true);


  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "/codersTycoon1_1/build/codersTycoon1_1.loader.js",
    dataUrl: "/codersTycoon1_1/build/codersTycoon1_1.data",
    frameworkUrl: "/codersTycoon1_1/build/codersTycoon1_1.framework.js",
    codeUrl: "/codersTycoon1_1/build/codersTycoon1_1.wasm",
  });

  function logIn() {
    sendMessage("LogObject", "logIn", user?.id_usuario.toString());
    console.log(`logged in as player id: ${user?.id_usuario}`)
    disableButtons();
    updateButtonState(true, false);
  }

  function logOut() {
    sendMessage("LogObject", "logOut", user?.id_usuario.toString());
    console.log(`logged out as player id: ${user?.id_usuario}`)
    disableButtons();
    updateButtonState(false, true);
  }

  function updateButtonState(isLogin, isLogout) {
    setTimeout(() => {
      setLogin(isLogin);
      setLogout(isLogout);
    }, 3000);
  }
  
  function disableButtons() {
    setLogin(true);
    setLogout(true);
  }


  return(
      <Fragment>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Unity unityProvider={unityProvider} style={{ height: 560, width: 1000 }} />
          <br />
          <div style={{display:'flex', flexDirection:'row', gap:'50px'}}>
            <ButtonStyled type="primary" onClick={logIn} disabled={login}>Log in</ButtonStyled>
            <ButtonStyled type="primary" onClick={logOut} disabled={logout}>Log out</ButtonStyled>
          </div>
        </div>
      </Fragment>
  );
};

export default Game;
