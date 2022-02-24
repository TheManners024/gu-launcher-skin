# im-launcher

1. Remember to `export CSC_IDENTITY_AUTO_DISCOVERY=false` on the command line before
running `npm run pack` to disable signing!
2. Remember to turn off devtools!

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
- initFormGroup()
  - Called when we want to set up the filters and grouping in the collection / workshop
areas. Need to change this to retain selection.
- shortenHeaderText()
  - Is what is used to show the text for grouping icons
- the god badge areas
  - 2 & t && e.ekj("godBadge--small", n.isSmall)("godBadge--empty", n.isEmpty)(n.god + '', n.god); is what it should be.
So search the string before the n.god part.
- composite card mouseenter
  - Make it a noop
- initDecks()
  - Called to initialize the decks in the workshop. Modify this to sort the decks.
- 


