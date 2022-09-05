const switches = document.querySelectorAll("switch-material");

switches.forEach(materialSwitch => {
    materialSwitch.addEventListener("switch", function(e) {
        const span = document.querySelector(".switch-result");
        
        if(e.detail.isActive) span.textContent = "On";
        else span.textContent = "Off";
    })
})