if (localStorage.getItem("sbsgames_the_forbidden_lovestory") == null || localStorage.getItem("sbsgames_the_forbidden_lovestory") == "NaN") {
    localStorage.setItem("sbsgames_the_forbidden_lovestory", 0);
}

function increase_coins(amount) {
    this.amount = amount;
    var initaial_amount = Number(localStorage.getItem("sbsgames_the_forbidden_lovestory"));
    var increased_amount = initaial_amount + amount;
    localStorage.setItem("sbsgames_the_forbidden_lovestory", increased_amount);
}

function decrease_coins(amount) {
    this.amount = amount;
    var initaial_amount = Number(localStorage.getItem("sbsgames_the_forbidden_lovestory"));
    var decreased_amount = initaial_amount - amount;
    localStorage.setItem("sbsgames_the_forbidden_lovestory", decreased_amount);
}