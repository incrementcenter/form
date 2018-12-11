function wordsCapitalize(x) {

    var words = x.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = capitalize(words[i]);
    }
    return words.join(" ");
}


console.log(wordsCapitalize("sako tolmaoghlian"));

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}