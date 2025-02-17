"use strict";
function jerry(...args) {
    console.log(args);
}
jerry(1, 2, 3, 4, 5, 6);
// ... spread(duplicate an old array in previous array) / rest(function parameter)
