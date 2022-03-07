let newBtn = document.getElementById("generate-new-quote");
let quoteEl = document.getElementById("advice-quote");
let IdEl = document.getElementById("advice-id-number");

newBtn.addEventListener("click", async () => {
  try {
    const raw_response = await fetch("https://api.adviceslip.com/advice");
    if (raw_response.ok) {
      const json_data = await raw_response.json();
      advice = json_data.slip.advice;
      advice_id = json_data.slip.id;

      quoteEl.textContent = advice;
      IdEl.textContent = advice_id;
    }
  } catch (error) {
    console.log(error);
  }
});
