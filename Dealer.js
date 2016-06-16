var Dealer = function() {
 this.currentHand = [];
 this.total = 0;
 }

Dealer.prototype.hit = function(nextCard) {
  this.currentHand.push(nextCard);
  this.handTotal();
}

Dealer.prototype.handTotal = function() {
  this.total = this.currentHand.reduce(function(previousCard, currentCard) {
    return previousCard.value + currentCard.value;
  }, {name: 'dummy', value: 0});
}

Dealer.prototype.dealerTurn = function(currentDeck) {
  while(this.total < 17) {
    var newCardArray = currentDeck.dealCards(1);
    var newCard = newCardArray[0];
    // [{name: 'King'...}] => {name: 'King' ...}

    this.hit(newCard);
  }
}

Dealer.prototype.startRound = function(card1, card2) {
  this.currentHand = [card1, card2];
  this.handTotal();
}