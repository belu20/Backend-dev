class smartphone {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  say() {
    console.log(`Charging ${this.model}`);
  }
}

class IOS extends smartphone {
  airDrop() {
    console.log(`IOS have a behavior Airdrop`);
  }
}

const ios = new IOS("Black", "A", "Iphone");

ios.say();
ios.airDrop();
