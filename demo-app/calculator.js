"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deriveFinalPrice(p) {
    document.getElementById("final-price").textContent = "Final Price: ".concat((p * 1.19).toFixed(2), " \u20AC");
}
document
    .querySelector("form")
    .addEventListener("submit", function (e) {
    e.preventDefault();
    var p = +new FormData(e.currentTarget).get("price").replace(",", ".");
    deriveFinalPrice(p);
});
