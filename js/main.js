window.addEventListener("load", () => {
    const asideElem = document.querySelector("#aside");
    const btnGolfBall = document.querySelector("#golfBall");
    const btnMonitor = document.querySelector("#monitor");

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
            
        })
    })

    





})