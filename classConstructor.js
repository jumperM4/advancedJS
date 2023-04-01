class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  intro() {
    console.log(
      `I am mooing myself. My name is ${this.name}. I am a ${this.type} and I am ${this.color}. Glad to e-meet you)))`
    );
  }
}

const cow = new Mamal("Gigi", "Bull", "Black");
console.log(cow);
cow.intro();
