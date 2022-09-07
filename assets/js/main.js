function changeMode() {
  const switches = document.querySelectorAll("switch-material");


  switches.forEach((switchMaterial) => {
    switchMaterial.addEventListener("switch", function (e) {
      const isActive = e.detail.isActive;
      const targetResult = "." + this.getAttribute("data-target");
      const result = this.closest(".switch-container").querySelector(targetResult);

      const displayResult = () => {
        if (isActive) {
          result.textContent = "on";
          result.classList.add("is-active");
        } else {
          result.textContent = "off";
          result.classList.remove("is-active");
        }
      };

      displayResult();

    });
  });
}

changeMode();
