window.addEventListener("load", () => {
    const asideElem = document.querySelector("#aside");
    const btnGlove = document.querySelector("#glove");
    const btnMonitor = document.querySelector("#monitor");
    btnGlove.addEventListener("click", () => {
        const imgGlove = document.createElement("img");
        imgGlove.setAttribute("src", "images/glove.jpg");
        const removeBtn = document.createElement("input");
        removeBtn.setAttribute("type", "Button");
        removeBtn.setAttribute("value", "Remove Item");
        asideElem.append(imgGlove);
        asideElem.append(removeBtn);
        removeBtn.addEventListener("click", () => {
            asideElem.removeChild(imgGlove);
            asideElem.removeChild(removeBtn);
        })
    })
    btnMonitor.addEventListener("click", () => {
        const imgMonitor = document.createElement("img");
        imgMonitor.setAttribute("src", "images/monitor.jpg");
        const removeBtn = document.createElement("input");
        removeBtn.setAttribute("type", "Button");
        removeBtn.setAttribute("value", "Remove Item");
        asideElem.append(imgMonitor);
        asideElem.append(removeBtn);
        removeBtn.addEventListener("click", () => {
            asideElem.removeChild(imgMonitor);
            asideElem.removeChild(removeBtn);
        })
    })


})