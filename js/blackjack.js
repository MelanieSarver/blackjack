/**
 * Created by mel on 12/15/16.
 */
var deal = function() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var card = getRandomInt(1, 52);
};

var playerCard1 = deal();
var playerCard2 = deal();

var dealerCard1 = deal();
var dealerCard2 = deal();

var getValue = function(card) {
    if((card % 13) == 0 || (card % 13) == 11 || (card % 13) == 12) {
        return 10;
    } else if ((card % 13) == 1) {
        return 11;
    } else {
        return (card % 13);
    }
};

var playerScore = function() {
    return (getValue(playerCard1) + getValue(playerCard2));
};
var dealerScore = function() {
    return (getValue(dealerCard1) + getValue(dealerCard2));
};

console.log("You have cards " + getValue(playerCard1) + " and " + getValue(playerCard2) + " for a score of " + playerScore()
+ ". The dealer has cards " + getValue(dealerCard1) + " and " + getValue(dealerCard2) + " for a score of " + dealerScore());


