window.addEventListener("load", () => {
    const asideElem = document.querySelector("#aside");
    const btnGlove = document.querySelector("#glove");
    const btnMonitor = document.querySelector("#monitor");
    const glovePrice = document.querySelector("#glovePrice");
    const monitorPrice = document.querySelector("#monitorPrice");
    btnGlove.addEventListener("click", () => {
        const imgGlove = document.createElement("img");
        imgGlove.setAttribute("src", "images/glove.jpg");
        const removeBtn = document.createElement("input");
        removeBtn.setAttribute("type", "Button");
        removeBtn.setAttribute("value", "Remove Item");
        asideElem.append(imgGlove);
        asideElem.append(glovePrice);
        asideElem.append(removeBtn);
        removeBtn.addEventListener("click", () => {
            asideElem.removeChild(imgGlove);
            asideElem.removeChild(glovePrice);
            asideElem.removeChild(removeBtn);
        }, {once: true})
    })
    btnMonitor.addEventListener("click", () => {
        const imgMonitor = document.createElement("img");
        imgMonitor.setAttribute("src", "images/monitor.jpg");
        const monitorPrice2 = document.createElement("h4");
        monitorPrice2.setAttribute("name", monitorPrice);
        const removeBtn = document.createElement("input");
        removeBtn.setAttribute("type", "Button");
        removeBtn.setAttribute("value", "Remove Item");
        asideElem.append(imgMonitor);
        asideElem.append(monitorPrice2);
        asideElem.append(removeBtn);
        removeBtn.addEventListener("click", () => {
            asideElem.removeChild(imgMonitor);
            asideElem.removeChild(monitorPrice2);
            asideElem.removeChild(removeBtn);
        })
    })



})