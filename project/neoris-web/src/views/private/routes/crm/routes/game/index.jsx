import React, {Fragment} from "react";
import {Unity, useUnityContext} from "react-unity-webgl";
import { ButtonStyled } from "./elements";
import { useState } from "react";
import { getBackendUrl } from "../../../../../../utils/config";

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
    var userData = {
        usuario_id: user?.id_usuario.toString(),
        backend_url: getBackendUrl().toString()
    };
    
    sendMessage("LogObject", "logIn", JSON.stringify(userData));
    disableButtons();
    updateButtonState(true, false);
  }

  function logOut() {
    sendMessage("LogObject", "logOut");
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
