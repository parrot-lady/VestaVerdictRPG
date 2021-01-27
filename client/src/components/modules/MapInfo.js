/*
  IF YOU WANT AN OBJECT ON A MAP, GIVE IT A NAME THEN PUT ITS OTHER INFO IN AN ARRAY
  ~ NOTE: one must be an "exit" in order to move into nextmap
  ~ make sure playerstart isn't inside an object
*/

export const mapinfo = {
  "Council1": {
    thismap: "Game-council",
    playerstart: [null, null],
    nextmap: "home",
    
    objects: {
      "starting" : ["", -1, -1, 962, 546],
    },
  },

  "home": {
    thismap: "Game-home",
    playerstart: [192, 96],
    nextmap: "rheaExterior", //which map it switches to when Player collides with exit object

    objects: { 
      // UNIQUEkey: [CSS className,  x,   y,  width, height]
        "exit"    : [ "invisible", 740, 478, 96, 32],
        "leftWall" : ["invisible", 0, 0, 54, 960 ],
        "rightWall" : ["invisible", 915, 0, 32, 960 ],
        "topWall" : ["invisible", 0, 0, 960, 80 ],
        "bottomWall" : ["invisible", 0, 508, 960, 32 ],
        "cabinet": ["invisible", 32, 74, 78, 48],
        "bed": ["invisible", 240, 64, 90, 105],
        "extraWallandStuff": ["invisible", 416, 96, 544, 50],
        "topRightFurniture": ["invisible", 790, 128, 128, 38],
        "column": ["invisible", 340, 0, 94, 390],
        "bottomLeftWall" :["invisible", 0, 288, 198, 140],
        "bottomRightWall": ["invisible", 218, 288, 192, 140],
        "bottomLeftDrawer": ["invisible", 55, 416, 83, 49],
        "chairLeft": ["invisible", 540, 224, 46, 63],
        "chairRight": ["invisible", 763, 238, 46, 68],
        "table": ["invisible", 603, 190, 142, 135],
        "leftExit": ["invisible", 693, 379, 61, 160],
        "rightExit": ["invisible", 820, 379, 60, 160],
        "leia": ["Game-leia", 450, 150, 32, 64]
    },
  },

  "tempstart":{
    thismap: "temporary-cover",
    playerstart: [null,null],
    nextmap: "Council1",
    objects: {
      "START": ["", 0, 0, 960, 960],
    },
  },

/*
  "room1": {
    thismap: "river",
    playerstart: [100, 100],
    nextmap: "room2", //which map it switches to when Player collides with exit object

    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
      "exit"    : [ "invisible", 740, 478, 96, 32],
      "leftWall" : ["invisible", 0, 0, 54, 960 ],
      "rightWall" : ["invisible", 915, 0, 32, 960 ],
      "topWall" : ["invisible", 0, 0, 960, 80 ],
      "bottomWall" : ["invisible", 0, 508, 960, 32 ],
      "cabinet": ["invisible", 32, 74, 78, 48],
      "bed": ["invisible", 240, 64, 90, 105],
      "extraWallandStuff": ["invisible", 416, 96, 544, 50],
      "topRightFurniture": ["invisible", 790, 128, 128, 38],
      "column": ["invisible", 340, 0, 94, 390],
      "bottomLeftWall" :["invisible", 0, 288, 198, 140],
      "bottomRightWall": ["invisible", 218, 288, 192, 140],
      "bottomLeftDrawer": ["invisible", 55, 416, 83, 49],
      "chairLeft": ["invisible", 540, 224, 46, 63],
      "chairRight": ["invisible", 763, 238, 46, 68],
      "table": ["invisible", 603, 190, 142, 135],
      "leftExit": ["invisible", 693, 379, 61, 160],
      "rightExit": ["invisible", 820, 379, 60, 160]



      // "hidden"  : ["invisible", 200, 200, 30, 60], //if the className is invisible, then the onClick functions will work for pngs inside of them
      // "water"   : ["invisible", 380, -1, 230, 546]
    },
  },

*/

  "rheaExterior": {
    thismap: "Game-rheaExterior",
    playerstart: [96, 272],
    nextmap: "panorama", //which map it switches to when Player collides with exit object
  

    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    "exit"    : [ "invisible",  480, 0,   96,    65  ],
    "upperWall" : ["invisible", 0, 0, 394, 270],
    "upperWallOfBlue" : ["invisible", 380, 0, 80, 199],
    "leftColumn": ["invisible", 435, 0, 58, 270],
    "rightColumn": ["invisible", 563, 0, 286, 270],
    "upperRedWall": ["invisible", 825, 210, 200, 16],
    "rightRedWall": ["invsibile", 886, 220, 220, 50],
    "leftWall" : ["invisible", 0, 0, 20, 960 ],
    "rightWall" : ["invisible", 942, 0, 32, 960 ],
    "topWall" : ["invisible", 0, 0, 960, 40 ],
    "bottomWall" : ["small-box", 0, 960, 960, 32 ], 
    "turtle": ["Game-turtle", 600, 440, 32, 32]
    },
  },

  "panorama": {
    thismap: "Game-panorama",
    playerstart: [63, 520],
    nextmap: "clearing", //which map it switches to when Player collides with exit object
  

    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    "exit"    : [ "invisible",  700, 20,   120,    80  ],
    "leftWall" : ["invisible", 180, 0, 40, 250 ],
    "leftWallStairs" : ["invisible", 0, 0, 48, 960 ],
    "rightWallStairs" : ["invisible", 90, 330, 48, 960 ],
    "leftTopStairs" : ["invisible", 0, 230, 210, 80 ],
    "stairsCorner" : ["invisible", 0, 295, 64, 64 ],
    "rightWall" : ["invisible", 942, 0, 40, 960 ],
    "topWall" : ["invisible", 0, 0, 720, 100 ],
    "bottomWall" : ["invisible", 130, 315, 960, 32 ], 
    "rightLedge" : ["invisible", 754, 70, 40, 500],
    "telescopeRight" : ["telescope", 700, 183, 100, 75],
    "telescopeLeft" : ["telescope", 310, 275, 90, 75]
    },
  },

  "clearing": {
    thismap: "Game-clearing",
    playerstart: [50, 277],
    nextmap: "templeExterior", //which map it switches to when Player collides with exit object
  

    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    "exit"  : [ "invisible",  940, 20, 50, 800],
    "upperBoundaryLeft" : ["invisible", 0, 142, 280, 50],
    "lowerBoundaryLeft" : ["invisible", 0, 420, 280, 100],
    "upperBoundaryRight" : ["invisible", 730, 142, 280, 50],
    "lowerBoundaryRight" : ["invisible", 730, 430, 280, 100],
    "midTop" : [ "invisible", 260, 128, 500, 30],
    "midBottom" : ["invisible", 260, 480, 500, 30],
    "leftWall" : ["invisible", 0, 0, 23, 560],
    "lyingDownCassandra": ["Game-layingDownCassandra", 540, 260, 62, 64],
    "bag": ["Game-bag", 160, 200, 32, 32],
    "grape": ["Game-grape", 580, 350, 32, 32]
    },
  },

  "clearing2": {
    thismap: "Game-clearing",
    playerstart: [50, 277],
    nextmap: "templeExterior", //which map it switches to when Player collides with exit object
  

    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    "exit"  : [ "invisible",  940, 20, 50, 800],
    "upperBoundaryLeft" : ["invisible", 0, 142, 280, 50],
    "lowerBoundaryLeft" : ["invisible", 0, 420, 280, 100],
    "upperBoundaryRight" : ["invisible", 730, 142, 280, 50],
    "lowerBoundaryRight" : ["invisible", 730, 430, 280, 100],
    "midTop" : [ "invisible", 260, 128, 500, 30],
    "midBottom" : ["invisible", 260, 480, 500, 30],
    "left wall" : ["invisible", 0, 0, 23, 560]
    },
  },

  "templeExterior": {
    thismap: "Game-templeExterior",
    playerstart: [155, 227],
    nextmap: "clearing-copy", //
    // nextmap: "templeInterior", //which map it switches to when Player collides with exit object
  
    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    // "exit"  : [ "invisible", 415, 93, 65, 30], //should be "behind" playerstart so they can go back to old woman to give water
    "exit" : ["invisible", 20, 157, 165, 30], // back in direction of clearing
    "leftTreesAndColumns" : ["invisible", 0, 102, 410, 50],
    "blocksBottomLeftStairs" : ["invisible", 0, 430, 280, 100],
    "rightLedge" : ["invisible", 725, 142, 30, 500],
    "blocksStairsAndColumns" : [ "invisible", 500, 128, 500, 60],
    "bottomLedge" : ["invisible", 260, 430, 500, 30],
    "left wall" : ["invisible", 0, 0, 23, 560],
    "forTempleWallLeft" : ["invisible", 260, 42, 160, 120],
    "forTempleWallRight" : ["invisible", 472, 42, 160, 120],
    "forTempleWallLeftRedBrick" : ["invisible", 250, 140, 45, 130],
    "forTempleWallRightRedBrick" : ["invisible", 600, 140, 45, 130], 
    "fountain": ["", 365, 295, 160, 119], //originally invisible
    "fountainWater": ["invisible", 425, 275, 50, 89]
    },
  },

  "clearing-copy": {
    thismap: "Game-clearing",
    playerstart: [940, 270],
    nextmap: "panorama-copy", //which map it switches to when Player collides with exit object
  

    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    "exit"  : [ "invisible",  30, 77, 50, 800], //50,277
    "upperBoundaryLeft" : ["invisible", 0, 142, 280, 50],
    "lowerBoundaryLeft" : ["invisible", 0, 420, 280, 100],
    "upperBoundaryRight" : ["invisible", 730, 142, 280, 50],
    "lowerBoundaryRight" : ["invisible", 730, 430, 280, 100],
    "midTop" : [ "invisible", 260, 128, 500, 30],
    "midBottom" : ["invisible", 260, 480, 500, 30],
    "leftWall" : ["invisible", 0, 0, 23, 560],
    "lyingDownCassandra": ["Game-layingDownCassandra", 540, 260, 62, 64],
    "bag": ["Game-bag", 160, 200, 32, 32],
    "grape": ["Game-grape", 580, 350, 32, 32]
    },
  },

  "panorama-copy": {
    thismap: "Game-panorama",
    playerstart: [850, 50],
    nextmap: "rheaExterior-copy", //which map it switches to when Player collides with exit object
  
    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    "exit"    : [ "invisible",  23, 500,   120,    40  ],
    "leftWall" : ["invisible", 180, 0, 40, 250 ],
    "leftWallStairs" : ["invisible", 0, 0, 48, 960 ],
    "rightWallStairs" : ["invisible", 90, 330, 48, 960 ],
    "leftTopStairs" : ["invisible", 0, 230, 210, 80 ],
    "stairsCorner" : ["invisible", 0, 295, 64, 64 ],
    "rightWall" : ["invisible", 942, 0, 40, 960 ],
    "topWall" : ["invisible", 0, 0, 720, 100 ],
    "bottomWall" : ["invisible", 130, 315, 960, 32 ], 
    "rightLedge" : ["invisible", 754, 70, 40, 500],
    "telescopeRight" : ["telescope", 700, 183, 100, 75],
    "telescopeLeft" : ["telescope", 310, 275, 90, 75]
    },
  },

  "rheaExterior-copy": {
    thismap: "Game-rheaExterior",
    playerstart: [540, 40],
    nextmap: "home-copy", //which map it switches to when Player collides with exit object
  
    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    "exit"    : [ "invisible",  60, 250,   90,    65  ], //96, 272
    "upperWall" : ["invisible", 0, 0, 394, 270],
    "upperWallOfBlue" : ["invisible", 380, 0, 80, 199],
    "leftColumn": ["invisible", 435, 0, 58, 270],
    "rightColumn": ["invisible", 563, 0, 286, 270],
    "upperRedWall": ["invisible", 825, 210, 200, 16],
    "rightRedWall": ["invsibile", 886, 220, 220, 50],
    "leftWall" : ["invisible", 0, 0, 20, 960 ],
    "rightWall" : ["invisible", 942, 0, 32, 960 ],
    "topWall" : ["invisible", 0, 0, 960, 40 ],
    "bottomWall" : ["small-box", 0, 960, 960, 32 ], 
    "turtle": ["Game-turtle", 600, 440, 32, 32]
    },
  },

  "home-copy": {
    thismap: "Game-home",
    playerstart: [780, 480],
    nextmap: "rheaExterior", //which map it switches to when Player collides with exit object

    objects: { 
      // UNIQUEkey: [CSS className,  x,   y,  width, height]
        "exit"    : [ "invisible", 192, 96, 96, 32], //192,96
        "leftWall" : ["invisible", 0, 0, 54, 960 ],
        "rightWall" : ["invisible", 915, 0, 32, 960 ],
        "topWall" : ["invisible", 0, 0, 960, 80 ],
        "bottomWall" : ["invisible", 0, 508, 960, 32 ],
        "cabinet": ["invisible", 32, 74, 78, 48],
        "bed": ["invisible", 240, 64, 90, 105],
        "extraWallandStuff": ["invisible", 416, 96, 544, 50],
        "topRightFurniture": ["invisible", 790, 128, 128, 38],
        "column": ["invisible", 340, 0, 94, 390],
        "bottomLeftWall" :["invisible", 0, 288, 198, 140],
        "bottomRightWall": ["invisible", 218, 288, 192, 140],
        "bottomLeftDrawer": ["invisible", 55, 416, 83, 49],
        "chairLeft": ["invisible", 540, 224, 46, 63],
        "chairRight": ["invisible", 763, 238, 46, 68],
        "table": ["invisible", 603, 190, 142, 135],
        "leftExit": ["invisible", 693, 379, 61, 160],
        "rightExit": ["invisible", 820, 379, 60, 160],
        "leia": ["Game-leia", 450, 150, 32, 64]
    },
  },



  "templeExterior2": {
    thismap: "Game-templeExterior",
    playerstart: [165, 207],
    nextmap: "templeInterior", //which map it switches to when Player collides with exit object


    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    "exit"  : [ "invisible", 415, 93, 65, 30],
    "leftTreesAndColumns" : ["invisible", 0, 142, 410, 50],
    "blocksBottomLeftStairs" : ["invisible", 0, 430, 280, 100],
    "rightLedge" : ["invisible", 725, 142, 30, 500],
    "blocksStairsAndColumns" : [ "invisible", 500, 128, 500, 60],
    "bottomLedge" : ["invisible", 260, 430, 500, 30],
    "left wall" : ["invisible", 0, 0, 23, 560],
    "forTempleWallLeft" : ["sinvisible", 260, 42, 160, 120],
    "forTempleWallRight" : ["invisible", 472, 42, 160, 120],
    "forTempleWallLeftRedBrick" : ["invisible", 250, 140, 45, 130],
    "forTempleWallRightRedBrick" : ["invisible", 600, 140, 45, 130], 
    "fountain": ["invisible", 365, 295, 160, 119],
    "fountainWater": ["invisible", 425, 275, 50, 89],
    "youngCassandra": ["Game-youngCassandra", 630, 240, 32, 64]
    },
  },

  "templeExterior3": {
    thismap: "Game-templeExterior",
    playerstart: [451, 163],
    nextmap: "templeInterior", //which map it switches to when Player collides with exit object


    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
    "exit"  : [ "invisible", 415, 93, 65, 30],
    "leftTreesAndColumns" : ["invisible", 0, 142, 410, 50],
    "blocksBottomLeftStairs" : ["invisible", 0, 430, 280, 100],
    "rightLedge" : ["invisible", 725, 142, 30, 500],
    "blocksStairsAndColumns" : [ "invisible", 500, 128, 500, 60],
    "bottomLedge" : ["invisible", 260, 430, 500, 30],
    "left wall" : ["invisible", 0, 0, 23, 560],
    "forTempleWallLeft" : ["sinvisible", 260, 42, 160, 120],
    "forTempleWallRight" : ["invisible", 472, 42, 160, 120],
    "forTempleWallLeftRedBrick" : ["invisible", 250, 140, 45, 130],
    "forTempleWallRightRedBrick" : ["invisible", 600, 140, 45, 130], 
    "fountain": ["invisible", 365, 295, 160, 119],
    "fountainWater": ["invisible", 425, 275, 50, 89],
    },
  },
  

  "templeInterior": {
    thismap: "Game-templeInterior",
    playerstart: [480, 505],
    nextmap: "templeExterior3", //which map it switches to when Player collides with exit object

    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
      "exit"    : [ "invisible", 448, 513, 63, 32],
      "leftWall" : ["invisible", 0, 0, 26, 960 ],
      "rightWall" : ["invisible", 945, 0, 32, 960 ],
      "topWall" : ["invisible", 0, 0, 960, 135],
      "bottomWall" : ["invisible", 0, 540, 960, 32 ],
      "leftColumn": ["invisible", 50, 0, 88, 235],
      "rightColumn": ["invisible", 339, 0, 88, 235],
      "leftStatue": ["invisible", 50, 335, 88, 160],
      "bottomRightStatue": ["invisible", 858, 345, 80, 150],
      "topRightStatue": ["invisible", 858, 165, 80, 105],
      "angryGirl": ["Game-angryGirl", 580, 230, 30, 64],
      "leaderGirl": ["Game-leaderGirl", 630, 230, 32, 64],
      "riddlesGirl": ["Game-riddlesGirl",  680, 230, 32, 64]
    },
  },

  "fireRoom": {
    thismap: "Game-fireRoom",
    playerstart: [480, 535],
    // nextmap: "home", //which map it switches to when Player collides with exit object
  
    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
      // "exit"    : [ "invisible", 740, 478, 96, 32],
      "leftWall" : ["invisible", 0, 0, 26, 960 ],
      "rightWall" : ["invisible", 945, 0, 32, 960 ],
      "topWall" : ["invisible", 0, 0, 960, 135],
      "bottomWall" : ["invisible", 0, 540, 960, 32 ],
      "fire": ["invisible", 405, 245, 150, 150],
      "flamesOfFire": ["invisible", 440, 175, 83, 150],
      "youngCassandra": ["Game-youngCassandra", 680, 210, 32, 64]
    },
  }
}