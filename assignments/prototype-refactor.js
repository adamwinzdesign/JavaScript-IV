/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(stats) {
//   this.createdAt = stats.createdAt,
//   this.name = stats.name,
//   this.dimensions = stats.dimensions
// }

// GameObject.prototype.destroy = function(){
//   return `${this.name} was removed from the game!`;
// }

class GameObject{
  constructor(stats){
    this.createdAt = stats.createdAt,
    this.name = stats.name,
    this.dimensions = stats.dimensions
  }
  destroy(){
    return `${this.name} was removed from the game!`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// function CharacterStats(stats) {
//   GameObject.call(this, stats),
//   this.healthPoints = stats.healthPoints;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// }

class CharacterStats extends GameObject{
  constructor(charStats) {
    super(charStats);
    this.healthPoints = charStats.healthPoints
  }
  takeDamage() {
    return `${this.name} took damage!`;
  }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

// function Humanoid(stats) {
//   CharacterStats.call(this, stats),
//   this.team = stats.team,
//   this.weapons = stats.weapons,
//   this.language = stats.language
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}`;
// }

class Humanoid extends CharacterStats {
  constructor(charStats) {
    super(charStats);
    this.team = charStats.team,
    this.weapons = charStats.weapons,
    this.language = charStats.language
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  };
  attack() {
    return `${this.name} attacks using ${this.weapons}!`
  }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

const villain = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 5,
  },
  healthPoints: 25,
  name: 'Akuma',
  team: 'Chaos Lords',
  weapons: [
    'Fireball',
    'Raging Demon',
    'Shadow Cut'
  ],
  language: 'Demonic',
});

const hero = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 4,
  },
  healthPoints: 20,
  name: 'Ryu',
  team: 'Cobra Kai',
  weapons: [
    'Ha Do Ken',
    'Sho Ryu Ken'
  ],
  language: 'Japanese',
});


console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(villain.createdAt);
console.log(villain.name);
console.log(hero.weapons);
console.log(villain.greet());
console.log(villain.attack());

console.log(`Swordsman sprang into existence at ${swordsman.createdAt}`);

let mageDate = mage.createdAt;
console.log(`testing ${mage.createdAt}`);
console.log(`testing ${mageDate}`);

console.log(mage.greet());

console.log(`${villain.name} has ${villain.healthPoints}hp!`);
console.log(`${hero.name} has ${hero.healthPoints}hp!`)

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!