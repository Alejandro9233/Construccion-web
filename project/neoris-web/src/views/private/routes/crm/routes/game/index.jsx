import React, {Fragment} from "react";
import {Unity, useUnityContext} from "react-unity-webgl";

const Game = ({user}) => {
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "/codersTycoon/build/codersTycoon.loader.js",
    dataUrl: "/codersTycoon/build/codersTycoon.data",
    frameworkUrl: "/codersTycoon/build/codersTycoon.framework.js",
    codeUrl: "/codersTycoon/build/codersTycoon.wasm",
  });

  function logIn() {
    sendMessage("LogObject", "logIn", user?.id_usuario.toString());
    console.log(`logged in as player id: ${user?.id_usuario}`)
  }

  function logOut() {
    sendMessage("LogObject", "logOut", user?.id_usuario.toString());
    console.log(`logged out as player id: ${user?.id_usuario}`)
  }

  return(
  
  <div>
    <Fragment>
        <Unity unityProvider={unityProvider} 
        style={{height:560, width: 1000}}
        />
        <br />
        <button onClick={logIn} >Log in</button>
        <button onClick={logOut} >Log out</button>
    </Fragment>
  </div>
  );
};

export default Game;
