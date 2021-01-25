import React, { Component } from "react";

import Player from "./Player.js";
import Box from "./Box.js";

/**
 * PROPS:
 * @param {number} width
 * @param {number} height
 * @param {string} name for className in Game.css to render
 * @param {number[]} start --> where player starts on this map
 * @param {Object[]} objects player obstacles --> look for a special one labelled goal
 * @param {() => ()} switch for switching to the next map
 * 
 */

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerx: null,
      playery: null,
      last_dir: "down", 
      held_dir: null,
      speed: 5,
      fps: 60,
      situation: "moving",  //can be "moving", "dialoguing", or "interacting"
      overlay: null, //there can only be one overlay -- or change to interactable so that it won't even try to process 2 interactions at once

      //"moving"      = only time when playerx/y can be changed and Player re-rendered
      //"dialoguing"  = when dialogue box things are happening --> pay attention to choices and send them to server(?) immediately after
      //"interacting" = when Box's onClick things are happening --> can't do anything else til it's clicked again

    };
  }

  componentDidMount() {
    this.setState({
      playerx: this.props.start[0],
      playery: this.props.start[1],
    });

    const directions = {
      "ArrowUp": "up",
      "ArrowDown": "down",
      "ArrowLeft": "left",
      "ArrowRight": "right",
    }
   
    window.addEventListener("keydown", (e) => {
      const dir = directions[e.key];
      this.setState({
        last_dir: dir,
        held_dir: dir,
      });
    });
   
    window.addEventListener("keyup", (e) => {
      const dir = directions[e.key];
      this.setState({
        held_dir: null, 
        last_dir: dir,
      });
    });

    setInterval(this.placeChar, this.state.fps);
  }

  placeChar = () => {
    if (this.state.situation !== "moving") {
      return;
    }

    const dir = this.state.held_dir;
    let newx = this.state.playerx;
    let newy = this.state.playery;

    if (dir) {
      if (dir === "right") {
        newx += this.state.speed;
      } else if (dir === "left") {
        newx -= this.state.speed;
      } else if (dir === "up") {
        newy -= this.state.speed;
      } else if (dir === "down") {
        newy += this.state.speed;
      }
    }

    if (newx < 0) { //left
      newx = 0;
    } else if (newx > this.props.width) { //right
      newx = this.props.width;
    } else if (newy < 0) { //top
      newy = 0;
    } else if (newy > this.props.height) { //bottom
      newy = this.props.height;
    }

    for (const i in this.props.objects) {
      let delta = this.checkCollision(this.props.objects[i], newx, newy, dir);
      if (delta[0] !== newx || delta[1] !== newy) {
        if (i === "exit") {
          console.log("REACHED THE EXIT"); //it works :D
          this.props.switch();
        }
        newx = delta[0];
        newy = delta[1];
        break; // since it can only collide with one obstacle at a time
      }
    }

    this.setState({
      playerx: newx,
      playery: newy,
    });
  }

  checkCollision = (thing, xpos, ypos, direction) => {//thing = [className, x, y, width, height]
    const topBorder = thing[2];             // y
    const bottomBorder = thing[2]+thing[4]; // y + h
    const leftBorder = thing[1];            // x
    const rightBorder = thing[1]+thing[3];  // x + w 
    let final = [xpos, ypos];

    // if new (x,y) bad and old (x,y) fine, kick them back out
    if ((xpos > leftBorder && xpos < rightBorder) && (ypos > topBorder && ypos < bottomBorder)) {
      if (direction === "right") { //as in, going right pushed x into the obstacle
        final[0] = leftBorder;
      } else if (direction === "left") {
        final[0] = rightBorder;
      } else if (direction === "down") {
        final[1] = topBorder;
      } else if (direction === "up") {
        final[1] = bottomBorder;
      } //only deal with single directions because we don't move diagonal
    }
    return final;
  }


  distancetest = (x1, y1, x2, y2, w2, h2, limit) => {
    let a = ( (x2 - x1)**2 + (y2 - y1)**2 )**0.5;      //corner distances
    let b = ( (x2+w2 - x1)**2 + (y2 - y1)**2 )**0.5;
    let c = ( (x2 - x1)**2 + (y2+h2 - y1)**2 )**0.5;
    let d = ( (x2+w2 - x1)**2 + (y2+h2 - y1)**2 )**0.5;
    if ( a<limit || b<limit || c<limit || d<limit ) {
      return true;
    }
    return false;
  }



  interaction = (properties) => { // onClick function --doesn't work for invisible CSS class
    const type = properties.name;

    const close = this.distancetest(this.state.playerx, this.state.playery, properties.x, properties.y, properties.width, properties.height, 64);
    
    if (!close) { //some #
      console.log("too far from the thing it clicked on");
      return;
    }

    if (type === "left-telescope") {
      this.showNewThing("redcircle");

    } else if (type === "redcircle") {
      this.hideNewThing();

    } else {
      console.log("Hello there"); //////////////////////////////////////////////////////////////////
    }
  }





  showNewThing = (name) => { //mostly for telescope but maybe for others, you never know ...
    // callback function that'll render another box based on what the caller Box says
    // assume it's a square that's supposed to cover the page: x=230, y=22, w=500, h=500
    if (this.state.overlay !== null) {
      console.log("full already"); ///////////////////////////////////////////////////////////////////////
      return;
    }
    
    console.log("reached showNewThing for", name); /////////////////////////////////////////////////
    this.setState({
      situation: "interacting",                                                          //maybe not do this since interact already diverts redcircle to hide
      overlay:  <Box name={name} x={230} y={22} width={500} height={500} key={"newthing"} interact={this.hideNewThing} />,
    });
  }

  hideNewThing = (name) => {
    // callback function that'll get back to Player movement and normal game play
    console.log("reached the hide function for", name); 
    this.setState({
      situation: "moving",
      overlay: null,
    });
  }


/* 
  conversing = () => {
    this.setState({
      situation: "dialoguing",
    });
  }
*/







  componentWillUnmount(){
    window.removeEventListener("keydown", (e) => {
      const dir = directions[e.key];
      this.setState({
        last_dir: dir,
        held_dir: dir,
      });
    });
   
    window.removeEventListener("keyup", (e) => {
      const dir = directions[e.key];
      this.setState({
        held_dir: null, 
        last_dir: dir,
      });
    });
  }



  render() {
    let objs = [];

    for (const key in this.props.objects) {
      objs.push(<Box key={key} name={this.props.objects[key][0]} x={this.props.objects[key][1]} y={this.props.objects[key][2]} width={this.props.objects[key][3]} height={this.props.objects[key][4]} interact={this.interaction} />);
    }

    const mapStyle = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
    }


    let art = this.props.name + " pixel-art"

    return (
      <div className={art} style={mapStyle} >
        {objs}
        <Player x={this.state.playerx} y={this.state.playery} last_dir={this.state.last_dir} held_dir={this.state.held_dir} />
        {this.state.overlay}
      </div>  
    );
  }
}

//have the map component show ALL of the PNGs --> just that camera moves every so often

export default Map;