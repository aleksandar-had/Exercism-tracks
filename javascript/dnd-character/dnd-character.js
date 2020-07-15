//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (ability) => {
  if (ability < 3) {
    throw new Error("Ability scores must be at least 3");
  } else if (ability > 18) {
    throw new Error("Ability scores can be at most 18");
  }
  return Math.floor((ability - 10) / 2);
};

// I chose to go with a simple for and not reduce since it might be faster :?
// source: https://jsperf.com/reduce-vs-loop/4
export class Character {
  static rollAbility() {
    let scores = [];
    for (let i = 0; i < 4; i++) {
      scores.push(Math.ceil(Math.random() * 6));
    }
    let highestScores = scores.sort((a, b) => a - b).slice(1, 4);
    let rolls = 0;

    for (let i = 0, l = highestScores.length; i < l; i++) {
      rolls += highestScores[i];
    }
    return rolls;
  }

  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this._constitution);
  }
}
