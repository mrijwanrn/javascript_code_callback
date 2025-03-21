function manipulateString(str, callback) {
    const manipulatedString = str.toUpperCase();
    callback(manipulatedString);
}

function logString(manipulatedStr) {
    console.log("The manipulated string is:", manipulatedStr);
}

manipulateString("hello world", logString);

