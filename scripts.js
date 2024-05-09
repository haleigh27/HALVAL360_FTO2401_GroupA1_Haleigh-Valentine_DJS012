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

    //Calculate
    const divisionResult = dividendValue / dividerValue;
    result.innerText = Math.floor(divisionResult);
});
