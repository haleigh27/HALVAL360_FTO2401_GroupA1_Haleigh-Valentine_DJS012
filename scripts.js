const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    //Convert input value from string to number
    const dividendValue = parseFloat(dividend);
    const dividerValue = parseFloat(divider);

    // Validate input values exist
    if (dividend.trim() === "" || divider.trim() === "") {
        result.innerText = "Division not performed. Both values are required in inputs. Try again";
        return;
    }

    // Check for invalid division (divider is zero)
    if (dividerValue === 0) {
        result.innerText = "Division not performed. Invalid number provided. Try again";
        console.error("Invalid division: Divider is zero");
        return;
    }

    // Display error message and replace the entire screen if user inputs anything other than a number.
    if (isNaN(dividendValue) || isNaN(dividerValue)) {
        document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
        console.error("Invalid input: Not a valid number");
        return;
    }

    //Calculate
    const divisionResult = dividendValue / dividerValue;
    result.innerText = Math.floor(divisionResult);
});
