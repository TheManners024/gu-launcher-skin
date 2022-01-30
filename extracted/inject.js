(function load() {
    const guBlue = '#03A9F4';
    const guBlueHover = '#90CAF9';
    const guBlueDark = '#0f1b27';
    const guYellow = '#FBC02D';
    const guGreen = '#4CAF50';
    const guGray = '#F5F5F5';
    const guBgGray = '#3c3c3c';
    const guOrange = '#FF9800';

    function css(styleStr) {
        const styles = new CSSStyleSheet();
        styles.replaceSync(styleStr);
        return styles;
    }

    let frag = null;
    function initStyle() {
        if (frag != null) {
            return;
        }
        const existing = document.querySelector('style[data-id-inject]');
        if (existing) {
            existing.parentNode.removeChild(existing);
        }
        const range = document.createRange();
        frag = range.createContextualFragment(`
    <style data-id-inject>
      body {
        --gu-blue: #03A9F4;
        --gu-blue-hover: #90CAF9; 
        --gu-blue-dark: #0f1b27; 
        --gu-yellow: #FBC02D; 
        --gu-green: #4CAF50; 
        --gu-gray: #F5F5F5; 
        --gu-bg-gray: #3c3c3c; 
        --gu-orange: #FF9800;
      }
      input[type=email]:focus,
      input[type=password]:focus,
      input[type=text]:focus,
      textarea:focus {
        background-color: var(--gu-blue-dark) !important;
        color: var(--gu-gray) !important;
        border-color: var(--gu-orange) !important;
      }
      cerberus-draggable-titlebar:not(.fake-selector) {
        background: none !important;
      }
      gu-plain-square-button.importDeckCta {
          --textFillColor: var(--gu-blue) !important;
          --borderColor: var(--gu-blue) !important;
          --borderColorHover: var(--gu-blue-hover) !important;
          --backgroundFillColor: var(--gu-blue-dark) !important;
      }
      gu-primary-hex-button:not(.fake-selector) {
        border-radius: 25px;
        background: var(--gu-blue-dark);
        z-index: 9;
        text-align: center;
        font-family: Unchained;
        text-transform: uppercase;
        line-height: 32px;
        clip-path: polygon(0px 0%, 100% 0%, 100% 0%, 100% 100%, 0px 100%, 0% 0%);
        right: 0;
        bottom: 0;
        font-size: 18px;
        color: var(--gu-blue);
      }
      gu-primary-hex-button:not(.fake-selector):hover {
        color: var(--gu-blue-hover);
      }
      a:not(.fake-selector),
      a:not(.fake-selector) > .electronMenuItem__icon {
        color: var(--gu-blue);
      }
      .cardHeader {
        padding: 4px;
        margin: 4px;
        background: rgba(0,0,0,0.25);
        border-radius: 4px;
      }
      .cardHeader__subtypeRibbon__image {
        /*filter: hue-rotate(-410deg);*/
      }
      .cardHeader__subtypeRibbon__label,
      .cardHeader__shield__rankInitials {
        color: var(--gu-gray);
      }
      .cardHeader__subheading:not(.fake-selector) {
        color: var(--gu-gray);
        font-size: 12px;
      }
      .cardHeader__timer:not(.fake-selector) {
        color: var(--gu-blue);
        font-weight: bold;
        font-size: 16px;
        display: inline-block;
        margin-top: 4px;
      }
      app-game-mode-card .backgroundImagery:not(.fake-selector) {
        opacity: 1;
        object-position: top;
      }
      app-game-mode-card .cardHeader__heading:not(.fake-selector) {
        background: var(--gu-yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      app-game-mode-card:not(.fake-selector) {
        box-shadow: none;
        background: var(--gu-bg-gray);
      }
      app-game-mode-card .subtype__description {
        border-image-source: none !important;
        border-color: var(--gu-yellow);
        border-width: 1px !important;
        width: auto !important;
        margin: 8px calc(var(--vw) * .9) 0 !important;
      }
      app-inventory:not(.fake-selector) {
        padding: calc(var(--vh) * 2) calc(var(--vw) * 3) 0;
      }
      app-inventory:not(.fake-selector) > app-news-provider:not(.fake-selector) {
        display: none;
      }
      app-inventory > .mainContentColumn:not(.fake-selector) {
        width: 100%;
      }
      app-inventory-cards-quality > header.groupedCardsHeader > .groupedCardsHeader__groupingName,
      app-inventory-cards-quality > header.groupedCardsHeader > .groupedCardsHeader__cardsCount {
        color: var(--gu-yellow);
        text-transform: uppercase;
      }
      app-inventory-cards-quality > header.groupedCardsHeader:before {
        background: var(--gu-yellow) !important;
      }
      .cardsListingArea {
        padding: 0 48px !important;
      }
      .cardsListingArea__cardsListing .cardGrid {
        grid-column-gap: 4px !important;
      }
      .godBadge.godBadge--small {
        border: solid 2px var(--gu-blue);
        box-shadow: none;
        background: transparent;
        border-radius: 100%;
        width: calc(var(--vw) * 3.9);
        height: calc(var(--vw) * 3.9);
      }
      .outer-circle:not(.fake-selector) {
        background: var(--gu-yellow);
      }
      .gu-simple-text {
        color: var(--gu-blue);
      }
      .newsItem:not(.fake-selector) {
        box-shadow: none;
        max-height: 60px;
        background: var(--gu-bg-gray);
      }
      .newsItem__caption:not(.fake-selector) {
        top: 50%;
        transform: translateY(-50%);
        line-height: 1;
      }
      .newsItem__caption__subHeading:not(.fake-selector) {
        color: var(--gu-gray);
        font-size: 12px;
        font-weight: bold;
        line-height: 1.4;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--gu-blue) !important;
        box-shadow: none !important;
      }
      ::-webkit-scrollbar-track {
        
      }
      .fluxProgress:not(.fake-selector) {
        height: 80px;
        background: var(--gu-blue-dark);
        margin-left: calc(var(--vw) * .9);
        margin-right: calc(var(--vw) * .9);
        border-radius: 0px;
      }
      .fluxProgress:not(.fake-selector) app-flux-progress-box:not(.fake-selector) {
        padding: 0;
      }
      .fluxProgress:not(.fake-selector) app-flux-progress-box:not(.fake-selector) > img {
        display: none;
      }
      .leftArea__title:not(.fake-selector) {
        background: var(--gu-yellow);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .leftArea__subTitle:not(.fake-selector) {
        color: var(--gu-gray);
        font-size: 10px;
        font-weight: bold;
      }
      app-flux-gauntlet-circle:not(.fake-selector) {
        background: var(--gu-bg-gray);
      }
      app-flux-gauntlet-circle.highlighted:not(.fake-selector) {
        background: var(--gu-blue);
      }
      .directChallenge__form__field + gu-paragraph-text:not(.fake-selector) {
        --textFillColor: var(--gu-orange) !important;
        font-size: 12px;
      }
      .directChallenge__form__field__input:not(.fake-selector) {
        border: solid 1px;
        border-color: transparent;
        background: var(--gu-blue-dark);
        color: var(--gu-gray);
      }
      .directChallenge__form__field__input--invalid:not(.fake-selector) {
        border-color: var(--gu-orange);
      }
      .avatarArea:not(.fake-selector) {
        display: none;
      }
      .playerStats:not(.fake-selector) > .textArea:not(.fake-selector) {
        padding: 0;
      }
      .progressBarArea__nextMilestone:not(.fake-selector) {
        bottom: 110%;
        left: 0;
        font-style: normal;
        color: var(--gu-gray);
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
      }
      .progressBarArea__nextReward__innerSquares {
      background: var(--gu-bg-gray) !important;
        border: solid 1px var(--gu-yellow) !important;
      }
      .progressBarArea__nextReward__innerSquares::before {
        border: solid 1px var(--gu-blue) !important;
      }
      .progressBar__bar.progressBar__bar--aqua {
        background: var(--gu-blue) !important;
        box-shadow: none !important;
      }
      .possessionGroup::before {
        content: '';
        background: #000;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        height: 25%;
        opacity: 0.35;
      }
      .possessionGroup:not(.fake-selector) {
        position: relative;
        width: calc(50% - 8px);
        border-radius: 25px;
        overflow: hidden;
      }
      .possessionGroup:not(.fake-selector):first-child,
      .possessionGroup:not(.fake-selector):nth-child(2),
      .possessionGroup:not(.fake-selector):nth-child(3),
      .possessionGroup:not(.fake-selector):nth-child(4) {
        top: auto;
        z-index: 1;
      }
      .possessionGroup > .possessionGroup__background:not(.fake-selector) {
        opacity: 1;
      }
      .possessionGroup > .possessionGroup__title:not(.fake-selector) {
        background: var(--gu-yellow);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        z-index: 1;;
      }
      .possessionGroup.possessionGroup--disabled > .possessionGroup__title:not(.fake-selector) {
        background: var(--gu-blue-hover);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
      .possessionGroup__cta {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        height: auto !important;
        width: auto !important;
        border-radius: 25px !important;
        opacity: 0 !important;
      }
      .possessionGroup__items {
        display: none !important;
      }
      .mainContentColumn__playerRow:not(.fake-selector) {
        display: none;
      }
      .mainContentColumn__possessionGroups:not(.fake-selector) {
        margin-top: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: hidden;
        height: 100%;
        justify-content: space-between;
      }
      .groupingButton,
      .filterButton {
        background: var(--gu-blue-dark) !important;
        color: var(--gu-gray) !important;
        border-color: var(--gu-gray) !important;
      }
      .groupingButton:hover,
      .filterButton:hover {
        background: var(--gu-blue-dark) !important;
        color: var(--gu-blue-hover) !important;
        border-color: var(--gu-blue-hover) !important;
      }
      .groupingButton.selected,
      .filterButton.selected {
        background: var(--gu-blue) !important;
        color: var(--gu-blue-dark) !important;
        border-color: var(--gu-blue-dark) !important;
      }
      .filterLabel {
        color: var(--gu-gray) !important;
        font-weight: bold;
      }
      app-create-new-button {
        border-color: var(--gu-yellow) !important;
      }
      app-create-new-button > gu-icon,
      app-create-new-button > .text {
        color: var(--gu-yellow) !important;
      }
      .deckName {
        color: var(--gu-yellow) !important;
        font-size: 12px !important;
        font-weight: bold !important;
      }
      cerberus-forge-card-list.cardBrowserArea header.sectionHeader input {
        line-height: 1.1rem;
        font-size: .9rem;
        margin: 0 auto;
        color: var(--gu-gray);
        border-left: none;
        border-right: none;
        border-top: none;
        border-bottom: solid 1px transparent;
        border-radius: 0;
      }
      cerberus-forge-card-list.cardBrowserArea header.sectionHeader input:focus {
        border-bottom: solid 1px var(--gu-gray) !important;
      }
      cerberus-forge-card-list.cardBrowserArea header.sectionHeader {
        background: none !important;
        border: none !important;
      }
      cerberus-forge-card-list.cardBrowserArea .sectionHeader .sectionHeader__title {
        background: var(--gu-yellow) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }
      .sectionHeader__title,
      .titleAndFiltering__title {
        color: var(--gu-yellow) !important;
        border: none !important;
      }
      .titleAndFiltering::before {
        background: var(--gu-blue-dark) !important;
      }
      .tooltipBubble {
        color: var(--gu-blue-hover) !important;
        background: var(--gu-blue-dark) !important;
        border-color: var(--gu-blue-hover) !important;
      }
      gu-paragraph-text.tooltipBubble--top:before {
        border-top-color: var(--gu-blue-hover) !important;
      }
      gu-paragraph-text.tooltipBubble--right:before {
        border-right-color: var(--gu-blue-hover) !important;
      }
      gu-paragraph-text.tooltipBubble--bottom:before {
        border-bottom-color: var(--gu-blue-hover) !important;
      }
      gu-paragraph-text.tooltipBubble--left:before {
        border-left-color: var(--gu-blue-hover) !important;
      }
      .bullet {
        background: var(--gu-yellow) !important;
      }
      .bullet::before {
        border-color: var(--gu-yellow);
      }
      gu-icon.directChallenge__form__field__icon,
      .directChallenge__heading__icon gu-icon {
        color: var(--gu-blue) !important;
      }
      app-gauntlet-progress-modal {
        
      }
      app-gauntlet-progress-modal .leftArea__title,
      app-gauntlet-progress-modal .leftArea__item__number,
      app-gauntlet-progress-modal .rightArea__gauntlet__flux__balance__value,
      app-gauntlet-progress-modal .rightArea__gauntlet__flux__balance__icon {
        background: var(--gu-yellow) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }
      app-gauntlet-progress-modal .rightArea__countdown {
        color: var(--gu-yellow) !important;
      }
      app-gauntlet-progress-modal .leftArea__item__textArea__top {
        font-weight: bold !important;
        text-transform: uppercase !important;
      }
      app-gauntlet-progress-modal .leftArea__item__textArea__bottom {
        font-style: normal !important;
      }
      .god__description,
      .god__title {
        color: var(--gu-yellow) !important;
        font-weight: bold !important;
      }
      .god__playStyle {
        color: var(--gu-gray) !important;
      }
      .god {
        background: var(--gu-blue) !important;
      }
      app-god-badge {
        box-shadow: none !important;
        border: none !important;
        background: none !important;
      }
      .godBadge__image {
        box-shadow: none !important;
      }
      main.addModalBlurBackground {
        
      }
      main.addModalBlurBackground app-modal {
        z-index: 22 !important;
        display: block;
        position: fixed !important;
        background-color: var(--gu-blue-dark) !important;
        backdrop-filter: none !important;
      }
      .bgOverlay {
        background: var(--gu-blue-dark) !important;
      }
      app-filter-sort-bar app-tooltip .filterButton__text {
        
      }
      app-filter-sort-bar app-tooltip:nth-child(2) {
      
      }
      app-filter-sort-bar app-tooltip:nth-child(3) {
      
      }
      app-filter-sort-bar app-tooltip:nth-child(4) {
      
      }
      app-filter-sort-bar app-tooltip:nth-child(5) {
      
      }
      app-filter-sort-bar app-tooltip:nth-child(6) {
      
      }
      app-filter-sort-bar app-tooltip:nth-child(7) {
      
      }
      app-my-cards {
        height: 100% !important;
      }
      app-active-deck > header {
        z-index: 1;
      }
      /*.cardItemWrapper {*/
      /*  overflow: visible;*/
      /*  position: relative;*/
      /*  height: 100%;*/
      /*  width: 100%;*/
      /*  display: flex;*/
      /*  flex-direction: column;*/
      /*  justify-content: space-between;*/
      /*}*/
      /*.cardItemWrapper > app-card2 {*/
      /*  pointer-events: none !important;*/
      /*}*/
      /*.cardItemWrapper:hover > app-card2 > composited-card {*/
      /*  z-index: 1 !important;*/
      /*  position: absolute !important;*/
      /*  top: 0;*/
      /*  left: 0;*/
      /*  transform: scale(2);*/
      /*}*/
      /*.cardItemWrapper > app-card2 > composited-card {*/
      /*  width: 100%;*/
      /*}*/
      .cardItemWrapper--greyed {
        filter: none !important;
        background: rgba(158, 158, 158, 0.3);
        border-radius: 8px;
      }
      .cardItemWrapper--greyed app-card2 {
        
      }
      .decksListing > app-deck:nth-child(2),
      .decksListing > app-deck:nth-child(3),
      .decksListing > app-deck:nth-child(4),
      .decksListing > app-deck:nth-child(5),
      .decksListing > app-deck:nth-child(6),
      .decksListing > app-deck:nth-child(7) {
        display: none;
      }
      .cardForgeArea__balanceArea__balanceRow .cardForgeArea__balanceArea__godsBalance__icon, 
      .cardForgeArea__balanceArea__balanceRow .cardForgeArea__balanceArea__godsBalance__number {
        -webkit-background-clip: text !important;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background: var(--gu-yellow);
      }
      .cardForgeArea__balanceArea__balanceRow .cardForgeArea__balanceArea__fluxBalance__icon, 
      .cardForgeArea__balanceArea__balanceRow .cardForgeArea__balanceArea__fluxBalance__number {
        -webkit-background-clip: text !important;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background: var(--gu-blue);
      }
      .cardForgeArea__balanceArea__balanceRow .header__divider {
        width: 0;
      }
      gu-modal-background {
        display: none;
      }
      .cerberusModal__content {
        width: auto !important;
        background: var(--gu-blue-dark);
      }
      .cerberusModal__dialog .cerberusModal__dialog--centered .cerberusModal__dialog--desktop {
        max-width: unset !important;
      }
      .cerberusModal__content gu-heading-text {
        --textFillGradient: var(--gu-yellow) !important;
      }
    </style>
    `);
        document.querySelector('head').append(frag);
    }

    function hexButtonStyles() {
        return css(`
            :host {
                background: none;
                color: var(--gu-blue);
            }
            :host(:hover) {
                color: var(--gu-blue-hover);
            }
            :host(:hover)::before,
            :host(:active)::before,
            :host(:active)::after {
                background: var(--gu-blue-dark);
            }
            :host::before {
                background: var(--gu-blue-dark);
            }
            .waveArtwork {
                display: none;
            }        
        `);
    }

    function headerStyles() {
        return css(`
            .logoArea {
                visibility: hidden;
                width: 16px;
            }
            :host {
                border-bottom: none;
            }
        `);
    }

    function headerMenuStyles() {
        return css(`
            .menuItem > * {
                color: var(--gu-blue);
            }
            .menuItem.menuItem--selected > :not(gu-sub-menu):not(gu-notification-bubble) {
                -webkit-text-fill-color: var(--gu-yellow);
            }
            .menuItem:hover > * {
                color: var(--gu-blue-hover);
            }
            gu-notification-bubble {
                background: var(--gu-yellow) !important;
            }
        `);
    }

    function headerSubMenuStyles() {
        return css(`
            .subMenu__item {
                color: var(--gu-blue);
                border-color: transparent;
            }
            .subMenu__item:hover {
                color: var(--gu-blue-hover);
                background: var(--gu-blue-dark);
                border-color: transparent;
            }
        `);
    }

    function userDetailsStyles() {
        return css(`
            .side.side--right {
                display: none;
            }
            .side.side--left > .side__border {
                display: none;
            }
            .side.side--left {
                margin-right: 0;
            }
            .side__hoverGradient {
                display: none !important;
            }
        `);
    }

    function userDetailsImageStyles() {
        return css(`
            .userDetailsArea__imgContainer::before {
                background: var(--gu-yellow);
            }
            .userDetailsArea__imgContainer .userDetailsArea__imgContainer__levelLabel, i {
                display: none;
            }
        `);
    }

    function progressBarStyles() {
        return css(`
                :host {
                    clip-path: none !important;
                    padding: 4px 4px;
                    height: 24px;
                    background: var(--gu-bg-gray);
                }
                :host::before {
                    clip-path: none !important;
                    background: none !important;
                    box-shadow: none !important;
                }
                :host([coloring="apocyan"]) .progress-bar::before {
                    background: var(--gu-blue) !important;
                }
                .progressBarMask {
                    clip-path: none !important;
                }
                .progress-bar-border {
                    clip-path:none !important;
                    top:5px !important;
                    bottom:5px !important;
                    left:5px !important;
                }
                .progress-bar-border .progress-bar {
                    clip-path:none !important;
                }
            `);
    }

    // function initForge() {
    //     const importBtn = document.querySelector('gu-plain-square-button.importDeckCta');
    //     if (importBtn) {
    //         importBtn.style.setProperty('--textFillColor', guBlue);
    //         importBtn.style.setProperty('--borderColor', guBlue);
    //         importBtn.style.setProperty('--borderColorHover', guBlueHover);
    //         importBtn.style.setProperty('--backgroundFillColor', guBlueDark);
    //     }
    // }

    function init() {

        document.documentElement.style.setProperty('--gu-blue', guBlue);
        document.documentElement.style.setProperty('--gu-blue-hover', guBlueHover);
        document.documentElement.style.setProperty('--gu-blue-dark', guBlueDark);
        document.documentElement.style.setProperty('--gu-yellow', guYellow);
        document.documentElement.style.setProperty('--gu-green', guGreen);
        document.documentElement.style.setProperty('--gu-gray', guGray);
        document.documentElement.style.setProperty('--gu-bg-gray', guBgGray);
        document.documentElement.style.setProperty('--gu-orange', guOrange);

        const app = document.querySelector('app-auto-letterbox');
        if (app) {
            app.style.setProperty('background-image', 'none');
            app.style.setProperty('background', guBlueDark);
        }

        // const titlebar = document.querySelector('body > app-root > app-auto-letterbox > div > div > cerberus-draggable-titlebar');
        // if (titlebar) {
        //     titlebar.style.setProperty('background', 'transparent');
        // }

        const fluxImg = document.querySelector('body > app-root > app-auto-letterbox > div > div > app-home > app-gu > main > app-game-modes > div > app-game-mode-switcher > div > app-game-mode-card:nth-child(1) > div.fluxProgress.ng-star-inserted > app-flux-progress-box > img');
        // fluxImg.setAttribute('src', '');

        const statDisplayIcons = document.querySelectorAll('.statDisplays__stat__icon') || [];
        for (const icon of statDisplayIcons) {
            icon.style.setProperty('--textFillColor', guBlue);
        }
        const statDisplayText = document.querySelectorAll('.statDisplays__stat__value') || [];
        for (const icon of statDisplayText) {
            icon.style.setProperty('--textFillColor', guBlue);
        }

        const guHeadingText = document.querySelectorAll('gu-heading-text') || [];
        for (const text of guHeadingText) {
            text.style.setProperty('--textFillGradient', guYellow);
        }

        const hexButtons = document.querySelectorAll('gu-primary-hex-button') || [];
        for (const btn of hexButtons) {
            btn.shadowRoot.adoptedStyleSheets = [...btn.shadowRoot.adoptedStyleSheets || [], hexButtonStyles()];
        }

        const headerBar = document.querySelector('app-auto-letterbox > div > div > app-home > app-gu > desktop-header-provider > gu-header-bar');
        if (headerBar) {
            headerBar.shadowRoot.adoptedStyleSheets = [...headerBar.shadowRoot.adoptedStyleSheets || [], headerStyles()];

            const headerMenu = headerBar.shadowRoot.querySelector('gu-menu');
            if (headerMenu) {
                headerMenu.shadowRoot.adoptedStyleSheets = [...headerMenu.shadowRoot.adoptedStyleSheets || [], headerMenuStyles()];

                const headerSubMenus = headerMenu.shadowRoot.querySelectorAll('div.menuItem.menuItem--hasSubMenu.menuItem > gu-sub-menu') || [];
                for (const sub of headerSubMenus) {
                    sub.shadowRoot.adoptedStyleSheets = [...sub.shadowRoot.adoptedStyleSheets || [], headerSubMenuStyles()];
                }

                const notificationBubble = headerMenu.shadowRoot.querySelector('gu-notification-bubble');
                if (notificationBubble && notificationBubble.length) {
                    notificationBubble.shadowRoot.adoptedStyleSheets = [...notificationBubble.shadowRoot.adoptedStyleSheets || [],
                        css(`:host {
                            background: var(--gu-yellow);
                        }`)];
                }
            } else {
                console.log('no headerMenu');
            }

            const headerUserArea = headerBar.querySelector('gu-header-bar > gu-header-user-area');
            if (headerUserArea) {
                headerUserArea.shadowRoot.adoptedStyleSheets = [...headerUserArea.shadowRoot.adoptedStyleSheets || [], userDetailsImageStyles()];

                const userDetails = headerUserArea.shadowRoot.querySelector('gu-user-details');
                if (userDetails) {
                    userDetails.shadowRoot.querySelector('.side__part.side__part--flux').style.setProperty('--textFillColor', guYellow);
                    userDetails.shadowRoot.querySelector('.side__part.side__part--stars').style.setProperty('--textFillColor', guBlue);
                    userDetails.shadowRoot.adoptedStyleSheets = [...userDetails.shadowRoot.adoptedStyleSheets || [], userDetailsStyles()];
                }
            } else {
                console.log('no headerUserArea');
            }
        } else {
            console.log('no headerBar');
        }


        const playerRank = document.querySelector('body > app-root > app-auto-letterbox > div > div > app-home > app-gu > main > app-game-modes > div > app-player-stats > div.textArea.ng-star-inserted > div > gu-simple-text');
        if (playerRank) {
            playerRank.style.setProperty('--textFillColor', guBlue);
            playerRank.style.setProperty('color', guBlue);
        }

        const progressBar = document.querySelector('gu-hex-progress-bar');
        if (progressBar) {
            progressBar.shadowRoot.adoptedStyleSheets = [...progressBar.shadowRoot.adoptedStyleSheets || [], progressBarStyles()];
        }
    }

    initStyle();
    init();

    let href = window && window.location ? window.location.href.toLowerCase() : null;
    const headerMenu = document.querySelector('gu-header-bar');
    headerMenu.addEventListener('click', function (ev) {
        setTimeout(() => {
            requestAnimationFrame(() => {
                if (window.location.href.toLowerCase() !== href) {
                    href = window.location.href.toLowerCase();
                    initStyle();
                    init();
                }
            });
        }, 250);
    });

    // const bsProto = Object.getPrototypeOf(window.bridge.isInGame$);
    // const isInGame$ = new bsProto.constructor(false);
    // const originalNext = isInGame$.next;
    // isInGame$.next = function () {
    //     originalNext.call(isInGame$, false);
    // };
    // window.bridge.isInGame$ = isInGame$;

}());







