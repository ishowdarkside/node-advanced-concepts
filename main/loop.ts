// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check 1: Any pending SetTimeout, setInterval, setImmediate?
  // Check 2 : Any opending OS tasks? (Like server listening to port?)
  // Check 3: Any pending long runnign operations? (Like fs module)

  return pendingTimers.length || pendingOSTasks.length || pendingOSTasks.length;
}

//Entire body executes in one "tick"
while (shouldContinue()) {}

// exit back to terminal
