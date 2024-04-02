window.addEventListener("load", () => {
    const asideElem = document.querySelector("#aside");
    const btnGolfBall = document.querySelector("#golfBall");
    const btnMonitor = document.querySelector("#monitor");
<<<<<<< HEAD
    const totalPrice = document.querySelector("#tPrice")

    var addItemButton = document.getElementById("addItemButton");
    // var removeItemButton = document.getElementById("removeItemButton");
    var totalCostElement = document.getElementById("totalCost");
    var totalCost = 0;

    

    btnGolfBall.addEventListener("click", () => {
        const imgGolfBall = document.createElement("img");
        imgGolfBall.setAttribute("src", "images/GolfBalls.png");
        imgGolfBall.setAttribute("style", "width: 70%;");
        const removeItemButton = document.createElement("input");
        removeItemButton.setAttribute("type", "Button");
        removeItemButton.setAttribute("value", "Remove Item");
        asideElem.append(imgGolfBall);
        asideElem.append(removeItemButton);
        asideElem.insertBefore(imgGolfBall, totalCostElement);
        asideElem.insertBefore(removeItemButton, totalCostElement);
        removeItemButton.addEventListener("click", () => {
            asideElem.removeChild(imgGolfBall);
            asideElem.removeChild(removeItemButton);
            
=======
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
>>>>>>> 176f8b18da211fcbc1120ead9c2fcb88ef8322ff
        })
    })
    

    





})