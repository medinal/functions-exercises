// TODO: add your solutions here!

function combineWords(word1, word2){
    console.log(word1 + word2);
    return word1+word2;
};

function repeatPhrase(phrase, n){
    for (i=0; i<n; i++){
    console.log(phrase);
    };
};

function toTheNthPower(x,y){
    return x**y;
};

function areaOfCircle(r){
    return (Math.PI*(r**2));
};

function pythagoreanTheorem(a,b){
    return (Math.sqrt((a**2)+(b**2)));
};

function evenlyDivisible(x,y){
    if (x%y === 0){
        return true;
    } else {
        return false;
    }
};

function vowelCount(word){
    var lower = word.toLowerCase();
    var vowels = {'a':0, 'e':0, 'i':0,'o':0,'u':0,'y':0};
    for (i=0; i<word.length; i++){
        if (word[i] in vowels){
        vowels[word[i]]++;
      };
    }
    return vowels;
};

function findWdi(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]==='wdi'){
            return true;
        }
    }
    return false;
};

function longestWord(sentence){
    words = sentence.split(" ");
    var lengths = [];
    for (i=0; i<words.length; i++){
        lengths.push(words[i].length);
    }
    lengths.sort();
    var longest = (Math.max.apply(null, lengths));
    index = lengths.indexOf(longest);
    return words[index];
};

function printTriangle(x){
    star = "*";
    for (i=1; i<=x; i++){
       console.log(star.repeat(i));
    }
};

function guess(){
  var userGuess = prompt("Guess 'heads' or 'tails'");
  return userGuess;
};

function coinFlip(){
  number = Math.random(0,2)*2;
  number = Math.floor(number);
  if (number===0){
    return "heads";
  } else {
    return "tails"
  }
};

function insert(){
  if (guess()===coinFlip()){
    $('#result').html('Right')
  } else {
    $('#result').html('Wrong')
  }
};

insert();

function printPyramid(x){
    star = "* ";
    space = " ";
    var numSpaces = x;
    while (numSpaces>0){
        for (j=0; j<=x; j++){
            console.log(space.repeat(numSpaces) + star.repeat(j));
            numSpaces--;
        }
    }
};
