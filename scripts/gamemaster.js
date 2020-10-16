let gameMaster = {
  //Create a Method that is going to create the info that is going to be assigned to the Player object constructor

  setGameStart: function(classType){
    //run 2 methods inside this object to run it on the onclick html event
    this.resetPlayer(classType);//we bring here the string from the onclick event on the HTML
    this.setPreFight();
  },
  //create the player inside the game
  resetPlayer: function(classType){
    switch(classType){
      case 'Simp':
        player = new Player(classType, 50, 0, 30, 200, 100, 9);
        break;
      case 'DickMan':
        player = new Player(classType, 50, 0, 30, 200, 100, 9);
        break;
      case 'PussyMonster':
        player = new Player(classType, 50, 0, 30, 200, 100, 9);
        break;
      case 'Example':
        player = new Player(classType, 50, 0, 30, 200, 100, 9);
        break;
   }
  },
  //sets the first stage inside the game
  setPreFight: function(){

  }
}