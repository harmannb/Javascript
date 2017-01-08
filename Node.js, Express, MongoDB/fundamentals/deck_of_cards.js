
// Create a Deck object constructor
function Deck() {
  this.cards = [];
}


// Reset the cards
Deck.prototype.reset = function() {

  this.cards = [];

  var suit = ['Spade', 'Heart', 'Clover', 'Diamond'];
  var value = ['A', 'K', 'Q', 'J', 2,3,4,5,6,7,8,9,10];
  // run through the deck
  for (var x = 0; x < suit.length; x++) {
    for (var y = 0; y < value.length; y++) {
      this.cards.push( new Card(suit[x], value[y]) );
    }
  }
  return this;
};


Deck.prototype.shuffle = function() {
  for (var i = 0; i < this.cards.length; i++){
    rand = Math.floor(Math.random() * (51 - 0) + 0);
    var temp = this.cards[i];
    this.cards[i] = this.cards[rand];
    this.cards[rand] = temp;
  }
  return this;
};

Deck.prototype.show = function() {
   var show = [];
    for (var i = 0; i < this.cards.length; i++) {
      show.push(this.cards[i]);
      console.log(this.cards[i].short)
    }
  return this;
};

Deck.prototype.deal = function() {
  return this.cards.pop();
};

// var test = new Deck();
// console.log(test);


// Create a Card object constructor
function Card(suit, value) {
  this.suit = suit;
  this.value = value;
  this.short = suit[0]+value;
}

function Player (name){
  this.name = name;
  this.hand = [];
}

Player.prototype.show = function() {
  console.log(this.name);
  console.log(this.hand);
  return this;
};

Player.prototype.draw = function(deck) {
  this.hand.push(deck.deal());
  return this;
};

Player.prototype.discard = function() {
  return this.hand.pop();
};


// test to show all cards
var deck = new Deck;
deck.reset();
deck.shuffle();
console.log(deck.deal());

var Harmann = new Player("Harmann")
Harmann.draw(deck).draw(deck).draw(deck).discard();
console.log(Harmann.discard())

Harmann.show();



