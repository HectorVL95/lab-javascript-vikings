// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health,
    this.strength = strength
  }

  attack () {
    return this.strength
  }

  receiveDamage (damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength)
    this.name = name 
  }
  
  battlecry () {
    return "Odin Owns You All"
  }
  

  receiveDamage (damage) {
    let remaininghealth = this.health -= damage
    if(remaininghealth > 0) {
      return `${this.name} has received ${damage} points of damage`
   } else {
      return `${this.name} has died in act of combat`
   }
  }

  battleCry () {
    return "Odin Owns You All!"
  }
  
}



// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    let remaininghealth = this.health -= damage
    if(remaininghealth > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = [],
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const receivedDamage = randomSaxon.receiveDamage(randomViking.strength)

    if (randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter(sax => sax !== randomSaxon)
    }

    return receivedDamage

  }

  saxonAttack() {
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const receivedDamage = randomViking.receiveDamage(randomSaxon.strength)

    if (randomViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter(vik => vik !== randomViking)
    }

    return receivedDamage
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
