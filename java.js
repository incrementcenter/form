function f(x) {

    var words = x.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = f1(words[i]);
    }
    return words.join(" ");
}


console.log(f("sako tolmaoghlian"));

function f1(str) {
    return str[0].toUpperCase() + str.slice(1);
}