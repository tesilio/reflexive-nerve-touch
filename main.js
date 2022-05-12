'use strict';


const eventHandlers = {
  init: function () {
    const boxes = document.querySelectorAll('.features');
    this.addEventListener(boxes, 'click', this.boxClickListener);
  },

  addEventListener: function (target, eventType, callback) {
    if (target.length) {
      for (const element of target) {
        element.addEventListener(eventType, callback);
      }
    } else {
      target.addEventListener(eventType, callback);
    }

  },

  boxClickListener: function (event) {
    console.log(event.target);
  },
};

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DomLoaded!');
  eventHandlers.init();
});
