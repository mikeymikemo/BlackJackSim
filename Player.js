var Player = function(name, chips) {
 this.playername = name;
 this.amtOfChips = chips;
 this.currentHand = [];
 this.total = 0;
 }


Player.prototype.hit = function(nextCard) {
  this.currentHand.push(nextCard);
  this.handTotal();
}

Player.prototype.handTotal = function() {
  this.total = this.currentHand.reduce(function(previousCard, currentCard) {
    return previousCard.value + currentCard.value;
  });
}

Player.prototype.startRound = function(card1, card2) {
  this.currentHand = [card1, card2];
  this.handTotal();
}