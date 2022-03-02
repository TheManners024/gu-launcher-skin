# im-launcher

1. Remember to `export CSC_IDENTITY_AUTO_DISCOVERY=false` on the command line before
running `npm run pack` to disable signing!
2. Remember to turn off devtools!

### Locations of interest
#### App Main
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

#### App Chunk
- Search for `null == t.account ? null : t.account.username` and replace with `null == t.account ? null : t.account.username + ' - ' + t.user.user_id`
  - Might have to remove `t` reference if the minification changes the variable.
- Search for `null == t.user ? null : t.user.won_matches` and `null == t.user ? null : t.user.unique_card_count` are where
you should replace the match win/loss ratio and unique card count labels.
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
  - Also search for other "mouseenter" and "mouseleave" events because there are appSingleCardHoverFx
- initDecks()
  - Called to initialize the decks in the workshop. Modify this to sort the decks.
- launchQueue()
  - Used to start a queue to find a match. Need to use the counter to recursively call it
a few times so we don't have to deal with the error from the first time failure.


