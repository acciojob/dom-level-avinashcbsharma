function findDOMLevel(elementId) {
      var element = document.getElementById(elementId);
      var domLevel = 1;

      while (element && element !== document.documentElement) {
        element = element.parentNode;
        domLevel++;
      }

      alert("The level of the element is: " + domLevel);
    }
   
    findDOMLevel("level");