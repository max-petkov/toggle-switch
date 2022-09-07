function changeMode() {
  const switches = document.querySelectorAll("switch-material:not([disabled])");

  switches.forEach((switchMaterial) => {
    const result = switchMaterial.closest(".wrapper").lastElementChild;
    const setResult = () => {
      result.classList.add("is-visible");
      if (switchMaterial.getAttribute("switch") === "on")
        result.textContent = "on";
      else result.textContent = "off";
    };

    setTimeout(setResult, 300);

    switchMaterial.addEventListener("switch", function (e) {
      const isActive = e.detail.isActive;
      const result = this.closest(".wrapper").lastElementChild;

      const results = document.querySelectorAll(".result");

      const updateResult = () => {
        if (isActive) {
          result.textContent = "on";
          result.classList.add("is-active");
        } else {
          result.textContent = "off";
          result.classList.remove("is-active");
        }

        changeThemeMode();

        function changeThemeMode() {
          const areAllSame = [...results].every(
            (result) => result.textContent === results[0].textContent
          );

          if (areAllSame) {
            const themeMode =
              results[0].textContent === "on" ? "light" : "dark";
            switches.forEach((sw) => sw.setAttribute("theme-mode", themeMode));
          }
        }
      };

      updateResult();
    });
  });
}

changeMode();
