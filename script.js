//your JS code here. If required.
    function updateSize() {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      
      var dimensions = document.getElementById("dimensions");
      dimensions.textContent = "Width: " + width + ", Height: " + height;
    }

    window.addEventListener("resize", updateSize);
    updateSize();