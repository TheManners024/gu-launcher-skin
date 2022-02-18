# im-launcher

Check out [this guide](https://immutable.atlassian.net/wiki/spaces/APOLLO/pages/118620406/Electron+Build+Process) for
instructions.

### Locations of interest

- calcTopCards() 
  - Is a method that seems to calculate which card goes on top of the deck that shows in the launcher.
- pushToActiveDeck(s)
  - Called when card added to the currently edited deck
- removeCardFromActiveDeck(s)
  - Called when card is removed from the currently edited deck. I don't think this is used
right now.
- removeCardsFromActiveDeck(s)
  - Called when multiple cards get removed from the currently edited deck. Typically
this is what is called to remove a card.
- setRankLevelLabels()
  - Called to set the rank level labels and stuff


