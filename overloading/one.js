"use strict";
function Ankit(pay, age, phone) {
    if (typeof pay === "string" && age === undefined && phone === undefined) {
        console.log("ayush");
    }
    else if (typeof pay === "string" && typeof age === "number" && typeof phone === "number") {
        return 0;
    }
    else {
        throw new Error("something is wrong");
    }
}
// Correct function calls
Ankit("ayush");
Ankit("ayush", 21, 9064941837);
