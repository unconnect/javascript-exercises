const Player = (name, level) => {
  let health = level * 2;
  let isDead = false;

  const getLevel = () => level;
  const getName = () => name;
  const getHealth = () => health;
  const isAlive = () => !isDead;
  const die = () => {
    console.log(`${name} has died`);
    isDead = true;
  };
  const damage = (x) => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
      console.log(`${enemy.getName()} has ${enemy.getHealth()} health left.`);
    }
    if (!enemy.isAlive()) {
      console.log(`${name} has killed ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName, getHealth, isAlive };
};

const jimmie = Player('jim', 10); // Jim, Level 10, Health 20
const badGuy = Player('badman', 1); // Jeff, Level 1, Health 2
// TODO: some thing is wrong here, badman is not dying with one hit.
jimmie.attack(badGuy);
jimmie.attack(badGuy);
