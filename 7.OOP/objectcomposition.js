class Character {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }

  canMove() {
    console.log(`${this.name} moves to another position`);
  }
}

function canAttack(character) {
  return {
    attack: () => {
      console.log(`${character.name} attack with a weapon`);
    },
  };
}

function canDefend(character) {
  return {
    defend: () => {
      console.log(`${character.name}  defend with shields`);
    },
  };
}

function canHeal(character) {
  return {
    heal: () => {
      console.log(`${character.name} casts a spell`);
    },
  };
}

//Di JavaScript, kita dapat mengomposisikan objek secara mudah dengan menggunakan method Object.assign(). Object.assign() adalah method statis untuk menyalin semua properti dari satu atau lebih object ke objek target.

function createMonster(name) {
  const characte = new Character(name, 10, 0);
  return Object.assign(characte, canAttack(characte));
}

function createGuardian(name) {
  const characte = new Character(name, 10, 0);
  return Object.assign(characte, canDefend(characte));
}

function createHealer(name) {
  const characte = new Character(name, 10, 0);
  return Object.assign(characte, canHeal(characte));
}

function createWarrior(name) {
  const characte = new Character(name, 10, 0);
  return Object.assign(
    characte,
    canAttack(characte),
    canHeal(characte),
    canDefend(characte)
  );
}

const monster = new createWarrior("Ifrit");
monster.canMove();
monster.defend();
monster.attack();
monster.heal();
