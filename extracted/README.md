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
- fetchGameModes()
  - Called to retrieve the available game modes. This is how I replace images for the app-game-mode-card:
    ```javascript
        for (const gm of le) {
          if (gm.id === 0) { // Solo
              gm.image_url = 'https://images.godsunchained.com/art2/1024/1492.jpg';
          }
          if (gm.id === 101) { // Tutorial
              gm.image_url = 'https://images.godsunchained.com/art2/1024/16.jpg';
          }
          if (gm.id === 6) { // Direct Challenge
              gm.image_url = 'https://images.godsunchained.com/art2/1280/42.jpg';
          }
          if (gm.id === 13) { // Rank Constructed
              gm.image_url = 'https://images.godsunchained.com/art2/1280/101305.jpg';
          }
        }
    ```
- The colors in app-main need to be updated to match whatever color scheme you're going for.

#### App Chunk
- Search for `null == t.account ? null : t.account.username` and replace with `null == t.account ? null : t.account.username + ' - ' + t.user.user_id`
  - Might have to remove `t` reference if the minification changes the variable.
  - This might not be relevant since they added the banner for the p2e campaign stuff
- Search for `null == t.user ? null : t.user.won_matches` and `null == t.user ? null : t.user.unique_card_count` are where
you should replace the match win/loss ratio and unique card count labels.
  - - This might not be relevant since they added the banner for the p2e campaign stuff
- Also don't forget to update the gu-heading-text to gu-paragraph-text for the previous two changes
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
- composited-card mouseenter
  - Make it a noop
  - Also search for other "mouseenter" and "mouseleave" events because there are appSingleCardHoverFx
- initDecks()
  - Called to initialize the decks in the workshop. Modify this to sort the decks.
  ```javascript
      .sort((d1, d2) => {
        if (d1.god < d2.god) {
            return -1;
        }
        if (d1.god > d2.god) {
            return 1;
        }
        if (d1.name < d2.name) {
            return -1;
        }
        if (d1.name > d2.name) {
            return 1;
        }
        return 0;
      })   
  ```
- launchQueue()
  - Used to start a queue to find a match. Need to use the counter to recursively call it
a few times so we don't have to deal with the error from the first time failure.
- Search for `Next milestone` and replace with `" Next milestone in " + t.user.xp_to_next + " XP - Level "` 
- buttonIsActive()
  - Used to detect when the queue cancel button is pressed. Change the `timeUntilCancel` value from 2e3 (2 seconds) to 
something lower like 150
- Look for occurrences of "close_x" and replace with `chevron_left` in the `app-modal-sidebar` component.
- calcThumbnail() will need to be edited so we can have our top card from the deck be a card from a neutral domain.
- calcTopCards() needs to be updated to accept deckId as a final parameter and use that to fetch the preferred showcase
card from localStorage.

### Other stuff

The top card is the 30th card added to the deck. To show the default top cards open the deck, remove the current 
top card, and leave deck edit without saving changes. 

