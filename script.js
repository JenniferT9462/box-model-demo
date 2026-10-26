// Each slider sets how thick its layer is.
    for (const name of ["margin", "border", "padding"]) {
      const slider = document.getElementById(name + "-size");
      slider.addEventListener("input", function () {
        document.getElementById(name).style.padding = slider.value + "px";
        document.getElementById(name + "-value").textContent = slider.value + "px";
      });
    }
