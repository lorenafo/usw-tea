class USWTea {
    constructor(teaType, brewTime) {
      this.teaType = teaType;
      this.brewTime = brewTime;
      this.isBrewed = false;
    }
  
    brew() {
      console.log(`Brewing a cup of unique ${this.teaType} tea for ${this.brewTime} minutes.`);
      setTimeout(() => {
        this.isBrewed = true;
        console.log(`Your special ${this.teaType} tea is ready! Enjoy.`);
      }, this.brewTime * 1000 * 60); // Convert minutes to milliseconds
    }
  
    enjoy() {
      if (this.isBrewed) {
        console.log(`Sipping on the delightful flavor of ${this.teaType} tea. Ah, the joy of USW Tea!`);
      } else {
        console.log('Your tea is not brewed yet. Please wait for the brewing process to complete.');
      }
    }
  }
  
  // Example usage:
  const uswTea = new USWTea('USW Blend', 3);
  uswTea.brew();
  setTimeout(() => uswTea.enjoy(), 3 * 60 * 1000); // Enjoy after 3 minutes
  