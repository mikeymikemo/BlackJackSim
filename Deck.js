var Deck = function (numberOfDecks) {
  this.totalCards = numberOfDecks * 52;
  this.qtyOfDecks = numberOfDecks;
  this.availableCards = [];
  this.buildDecks(numberOfDecks);
  this.shuffle(this.availableCards);


  console.log('Built deck with cards', this.availableCards);
}

Deck.prototype.shuffle = function(array) {
  var i = 0;
  var j = 0;
  var temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

Deck.prototype.buildDecks = function(numberOfDecks) {
  for(var y = 0; y < numberOfDecks; y++) {
    for(var x = 1; x < 14; x++) {
      var cardName = x.toString();
      var cardValue = x;
      // logic to determine name here
      if(x === 11) {
        cardName =  'Jack'
        cardValue = 10;
      } else if(x === 12) {
        cardName = 'Queen'
        cardValue = 10;
      } else if (x === 13) {
        cardName = 'King'
        cardValue = 10;
      } else if (x === 1) {
        cardName = 'Ace'
        cardValue = 11;
      }
      var spade = {
        suit: 'spade',
        value: cardValue,
        name: cardName 
      }
      var diamond = {
        suit: 'diamond',
        value: cardValue,
        name: cardName
      }
      var heart = {
        suit: 'heart',
        value: cardValue,
        name: cardName
      }
      var club = {
        suit: 'club',
        value: cardValue,
        name: cardName
      }
      this.availableCards.push(spade);
      this.availableCards.push(diamond);
      this.availableCards.push(heart);
      this.availableCards.push(club);
    }
  }
}

Deck.prototype.dealCards = function(quantity) {
  /*if(this.availableCards <= this.totalCards * .2) {
    this.buildDecks(this.qtyOfDecks);
    this.shuffle(this.availableCards);    
  } */
  var dealtCards = [];
  for(var x = 0; x < quantity; x++) {
    var card = this.availableCards.shift();
    dealtCards.push(card);
  }
  return dealtCards;
}