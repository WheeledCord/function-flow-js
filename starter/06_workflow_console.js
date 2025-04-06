// TODO: Create a function 'animateSteps' that logs one step from a list every second
// TODO: Use 'setTimeout' or 'setInterval' to log the steps in order

const steps = [
  "Step 1: Create empty cart",
  "Step 2: Add item to cart",
  "Step 3: Calculate total",
  "Step 4: Apply discount",
  "Step 5: Checkout"
];


function animateSteps() {
  let i = 0;
  const thing = setInterval(() => {
    console.log(steps[i]);
    i++;
    if (i >= steps.length){
      clearInterval(thing);
    }
  }, 100);
}

animateSteps();

module.exports = { animateSteps };
