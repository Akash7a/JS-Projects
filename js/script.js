{
    const body = document.body;
    const buttons = document.querySelectorAll(".buttons");
    const displayColor = document.getElementById("displayHexColor");
    const displayNormalColor = document.getElementById("displayNormalColor");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.id === "grey") {
                body.style.backgroundColor = "grey";
            }
            else if (e.target.id === "white") {
                body.style.backgroundColor = "white";
            }
            else if (e.target.id === "blue") {
                body.style.backgroundColor = "blue";
            }
            else if (e.target.id === "yellow") {
                body.style.backgroundColor = "yellow";
            }
            else if (e.target.id === "randomeColor") {
                body.style.backgroundColor = randomColor();
            }
            else if (e.target.id === "randomeHexColor") {
                body.style.backgroundColor = generateRandomHexColor();
            }

        })
    })

    // randome color generate function
    const randomColor = () => {
        const allColors = ["blue", "red", "green", "gray", "lime", "limegreen", "skyblue", "lightgreen", "crimson", "aqua", "aquamarine", "purple", "indianred"];
        let color = "";
        color += allColors[Math.floor(Math.random() * allColors.length)];
        displayNormalColor.textContent = color;
        return color;
    };


    const generateRandomHexColor = () => {
        const hexChars = '0123456789ABCDEF';
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += hexChars[Math.floor(Math.random() * 16)];
        }
        displayColor.textContent = color;
        return color;
    }
}
