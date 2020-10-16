// Declare the player variable in the global scope so it's always available
let player;

//Player object constructor
function Player(classType, health, mana, strength, agility, speed, moisture){
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
  this.moisture = moisture;
}