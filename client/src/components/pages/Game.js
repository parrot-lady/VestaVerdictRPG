import React, { Component } from "react";

import Player from "../modules/Player.js";

import "./Game.css";

import NavBar from "./navbar.js";


/**
 * path = "/game"
 * 
 * PROPS
 * @param userId ~don't know how/why/when I'll need it yet though
 */

class Game extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){     // for api calls
  }



  
  render() {
    console.log("entered the render");

    return(
      <div className="frame">

        <div>
          <link rel="stylesheet" type="text/css" href="Game.css" />
        </div>

        <div className="corner_topleft"></div>
        <div className="corner_topright"></div>
        <div className="corner_bottomleft"></div>
        <div className="corner_bottomright"></div>

        <div className="camera">
          <Player />
          
          <svg className="headline" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 75 14" shapeRendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path stroke="rgba(128,191,255,0.01568627450980392)" d="M0 0h1M74 0h1M0 13h1M74 13h1" />
            <path stroke="#5f5f5f" d="M1 0h73M0 1h1M74 1h1M0 2h1M74 2h1M0 3h1M74 3h1M0 4h1M74 4h1M0 5h1M74 5h1M0 6h1M74 6h1M0 7h1M74 7h1M0 8h1M74 8h1M0 9h1M74 9h1M0 10h1M74 10h1M0 11h1M74 11h1" />
            <path stroke="#f5f5f5" d="M1 1h73M1 2h73M1 3h3M7 3h12M21 3h22M45 3h29M1 4h4M6 4h13M20 4h1M22 4h20M43 4h2M46 4h28M1 5h4M6 5h2M10 5h2M15 5h4M20 5h2M23 5h2M27 5h2M30 5h1M32 5h1M34 5h1M38 5h4M43 5h5M50 5h2M56 5h3M61 5h3M66 5h1M69 5h5M1 6h4M6 6h1M8 6h2M11 6h1M13 6h2M16 6h3M20 6h2M23 6h1M25 6h2M28 6h1M30 6h1M32 6h1M34 6h1M36 6h2M39 6h3M43 6h7M51 6h1M53 6h1M55 6h1M57 6h1M59 6h2M62 6h1M64 6h5M70 6h4M1 7h4M6 7h1M8 7h2M11 7h1M13 7h2M16 7h3M20 7h2M23 7h1M25 7h2M28 7h1M30 7h1M32 7h1M34 7h1M36 7h2M39 7h3M43 7h5M51 7h1M53 7h1M55 7h1M57 7h1M62 7h1M64 7h3M70 7h4M1 8h4M6 8h1M8 8h2M11 8h1M13 8h2M16 8h3M20 8h1M22 8h2M25 8h2M28 8h1M30 8h1M32 8h1M34 8h1M36 8h2M39 8h3M43 8h2M46 8h1M48 8h2M51 8h1M53 8h1M55 8h1M57 8h1M59 8h4M64 8h2M67 8h2M70 8h4M1 9h4M6 9h2M10 9h2M15 9h4M21 9h4M27 9h3M34 9h1M36 9h2M39 9h4M45 9h3M51 9h1M53 9h1M55 9h1M57 9h2M62 9h1M64 9h3M70 9h4M1 10h11M13 10h61M1 11h11M13 11h61" />
            <path stroke="#323234" d="M4 3h3M19 3h2M43 3h2M5 4h1M19 4h1M21 4h1M42 4h1M45 4h1M5 5h1M8 5h2M12 5h3M19 5h1M22 5h1M25 5h2M29 5h1M31 5h1M33 5h1M35 5h3M42 5h1M48 5h2M52 5h4M59 5h2M64 5h2M67 5h2M5 6h1M7 6h1M10 6h1M12 6h1M15 6h1M19 6h1M22 6h1M24 6h1M27 6h1M29 6h1M31 6h1M33 6h1M35 6h1M38 6h1M42 6h1M50 6h1M52 6h1M54 6h1M56 6h1M58 6h1M61 6h1M63 6h1M69 6h1M5 7h1M7 7h1M10 7h1M12 7h1M15 7h1M19 7h1M22 7h1M24 7h1M27 7h1M29 7h1M31 7h1M33 7h1M35 7h1M38 7h1M42 7h1M48 7h3M52 7h1M54 7h1M56 7h1M58 7h4M63 7h1M67 7h3M5 8h1M7 8h1M10 8h1M12 8h1M15 8h1M19 8h1M21 8h1M24 8h1M27 8h1M29 8h1M31 8h1M33 8h1M35 8h1M38 8h1M42 8h1M45 8h1M47 8h1M50 8h1M52 8h1M54 8h1M56 8h1M58 8h1M63 8h1M66 8h1M69 8h1M5 9h1M8 9h2M12 9h3M19 9h2M25 9h2M30 9h4M35 9h1M38 9h1M43 9h2M48 9h3M52 9h1M54 9h1M56 9h1M59 9h3M63 9h1M67 9h3M12 10h1M12 11h1" />
            <path stroke="#434343" d="M0 12h1M74 12h1M1 13h73" />
            <path stroke="#cccccc" d="M1 12h73" />
          </svg>
        
        </div>

      </div>


    );
  }
}

export default Game;