var Sim = function() {
var numberOfDecks = 1;
var name = "Player1"
var chips = 500;

this.deck = new Deck(numberOfDecks);
this.player = new Player(name, chips);
this.dealer = new Dealer();
};

Sim.prototype.startGame = function() {
  var first4 = this.deck.dealCards(4);
  this.player.startRound(first4[0], first4[2]);
  this.dealer.startRound(first4[1], first4[3]);
}

// TODO: chip exchange
