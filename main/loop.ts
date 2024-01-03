// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check 1: Any pending SetTimeout, setInterval, setImmediate?
  // Check 2 : Any opending OS tasks? (Like server listening to port?)
  // Check 3: Any pending long running operations? (Like fs module)

  return pendingTimers.length || pendingOSTasks.length || pendingOSTasks.length;
}

//Entire body executes in one "tick"
while (shouldContinue()) {
  // 1) Node looks at pending timers and sees if any functions are ready to be called
  // 2) Node looks at pending OS tasks and pending operations and calls relevant callbacks
  // 3) Pause execution. Continue when...
  // - New pendingOSTask is done
  // - New pending operation is done
  // - Timer is about to complete
  // 4) Look at pendingTimers. Call any setImmediate
  // 5) Handle any 'close' events
}

// exit back to terminal
