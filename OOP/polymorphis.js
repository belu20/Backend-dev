class smartPhone {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`charging ${this.model}`);
  }
}

//poymorphis merubah method dari super class

class Android extends smartPhone {
  constructor(color, brand, model, device) {
    //ovveriding
    super(color, brand, model);
    this.device = device;
  }

  charging() {
    console.log(`Charging ${this.device} with fast charging`);
  }

  splitScreen() {
    console.log("Android Have a Split Screen");
  }
}

const android = new Android("Black", "A", "Redmi 9T", "TV");
android.charging();
