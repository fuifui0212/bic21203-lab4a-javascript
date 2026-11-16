const changeBtn = document.getElementById("changeBtn");
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");

function checkInput()
{
    const rawValue = userInput.value.trim();

    if(rawValue === "")
    {
        result.textContent = "Please enter a valid number!";
        return;
    }

    const number = Number(rawValue);

    if (Number.isNaN(number))
    {
        result.textContent = "Please enter a valid number!";
        return;
    }

    if(number < 10)
    {
        result.textContent = "The number is lower than 10";
    }
    else if(number > 10)
    {
        result.textContent = "The number is higher than 10";
    }
    else{
        result.textContent = "The number is equal to 10";
    }
}
checkBtn.addEventListener("click", checkInput)