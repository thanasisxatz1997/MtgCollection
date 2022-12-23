(function() {
    var dragged, listener;

    console.clear();

    dragged = null;

    listener = document.addEventListener;

    listener("dragstart", (event) => {
      console.log("start !");
      return dragged = event.target;
    });

    listener("dragend", (event) => {
      return console.log("end !");
    });

    listener("dragover", function(event) {
      return event.preventDefault();
    });

    listener("drop", (event) => {
      console.log("drop !");
      event.preventDefault();
      if (event.target.className === "DeckCardContainter") {
        // dragged.parentNode.removeChild(dragged);
        return event.target.appendChild(dragged.cloneNode(true));
      }
    });

  }).call(this);