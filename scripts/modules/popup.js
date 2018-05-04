import $ from "jquery";

class Popup {
  constructor() {
    this.button = $(".gamebox__btn");
    this.popup = $(".popup");
    this.popupTitle = $(".popup__title");
    this.popupDescription = $(".popup__description");
    this.blackOverlay = $(".black-overlay");
    this.iframe = $(".popup__game");
    if (this.popup.css("opacity") == "0") {
      this.is_mobile = true;
    }
    this.events();
  }

  events() {
    this.button.click(e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (this.is_mobile) {
        let link = this.getDataFromGame(e.currentTarget.classList[1]).iframeSrc;
        window.open(link, "_blank");
      } else {
        if (e.currentTarget.classList[2] == "game") {
          this.showModal(e.currentTarget.classList[1]);
          this.blackOverlay.fadeIn("normal");
        } else {
          let link = this.getDataForApp(e.currentTarget.classList[1]);
          window.open(link, "_blank");
        }
      }
    });

    $(document).click((e) => {
      if (!this.is_mobile) {
        if(e.target.className !== "popup") {
          this.popup.fadeOut("medium");
          this.blackOverlay.fadeOut("medium", () => {
            this.iframe.attr("src", "");
          });
        }

      }
    });
  }

  showModal(gameString) {
    let res = this.getDataFromGame(gameString);
    let game = res.game;
    let iframeSrc = res.iframeSrc;
    let description = res.description;

    this.popupTitle.html(game);
    this.popupDescription.html(description);
    this.iframe.attr("src", iframeSrc);
    this.popup.fadeIn("normal").css("display", "flex");
  }

  getDataForApp(name) {
    if(name == "app-natours") {
        return "https://gastikirs.github.io/natours-css/"
    } else if (name== "app-trillo") {
        return "https://gastikirs.github.io/trillo-css/"
    } else if(name=="app-react") {
        return "http://nameless-woodland-55081.herokuapp.com/#/"
    }
  }

  getDataFromGame(name) {
    let game, iframeSrc, description;

    if (name == "game-abundance") {
      game = "Abundance Spell";
      iframeSrc =
        "https://games.spinomenal.com/Play/Fun?gameCode=SlotMachine_AbundanceSpell&langCode=en_US&currencyCode=USD&gameToken=FUN_636610188734166492&platform=1&partnerId=SPIN&logo=SPIN";
        description = "You are about to win luck, fortune and everything else your heart desires, but be aware...all comes with a price so enter at your own discretion. This dark magic should be used carefully and with much thought but only those who take risks win big, right? So what are you whiling to do to win? This mysterious game has 50 lines, magical free spins mode, expanding wild feature and bonus game. You have been warned..."
    } else if (name == "game-reviving") {
      game = "Reviving Love";
      iframeSrc =
        "https://games.spinomenal.com/Play/Fun?gameCode=SlotMachine_RevivingLove&langCode=en_US&currencyCode=USD&gameToken=FUN_636610188697132288&platform=1&partnerId=SPIN&logo=SPIN";
        description = "How far would you go for love? What would you sacrifice to reunite with a loved one you’ve lost? Join the mad scientist in his old secret lab to find out…"
    } else if (name == "game-directions") {
      game = "4 Winning Directions";
      iframeSrc =
        "https://games.spinomenal.com/Play/Fun?gameCode=SlotMachine_4WinningDirections&langCode=en_US&currencyCode=USD&gameToken=FUN_636610188743229712&platform=1&partnerId=SPIN&logo=SPIN";
    description = "The Chinese legend tells about four guardians of the four compass directions that represent the celestial Emblems of the Chinese emperor; Tortoise, White Tiger, Phoenix and the Green Dragon. Which one is the strongest and who do you think will win? Who will you be willing to bet on?"
    } else if (name == "game-fortunes") {
      game = "Chest Of Fortunes";
      iframeSrc =
        "https://games.spinomenal.com/Play/Fun?gameCode=SlotMachine_ChestOfFortunes&langCode=en_US&currencyCode=USD&gameToken=FUN_636610188715414997&platform=1&partnerId=SPIN&logo=SPIN";
    description = "Wow! The night of the festival is here! So much can happen! The possibilities are infinite!!! The excitement, the mystery, the thrill… you must join this parade! This amazing and colorful game has 25 lines, expanding wild feature, surprise wild feature, free spins mode and a delightful bonus game!"
    } else if (name == "game-lilith") {
      game = "Liliths Passion";
      iframeSrc =
        "https://games.spinomenal.com/Play/Fun?gameCode=SlotMachine_LilithPassion&langCode=en_US&currencyCode=USD&gameToken=FUN_636610188688381583&platform=1&partnerId=SPIN&logo=SPIN";
    description = "This game will seduce you to a whole new level, where you are at the sole mercy of Lilith, so you better obey. See you on the other side."
    }

    return {
      game,
      iframeSrc,
      description
    };
  }
}

export default Popup;
