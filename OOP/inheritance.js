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

class ANDROID extends smartphone {
  splitscreen() {
    console.log("Android have a splitscreen");
  }
}

const ios = new IOS("Black", "A", "Iphone 13");
const andro = new ANDROID("pink", "xiomi", "Redmi 9");

ios.say();
ios.airDrop();

andro.say();
andro.splitscreen();
