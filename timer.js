//  Testing Asynchronous Code with Timers
function delayExecution(callback, delay) {
    setTimeout(callback, delay);
}

module.exports = { delayExecution };
