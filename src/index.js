function displayFact(response) {
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "24b9b3ae0f6ea728ao45f6et261b0962";
  let prompt = `Generate a list of 30 Black/African American History facts from ${instructionsInput.value}`;
  let context =
    "User instructions: You are an expert in Black/African American History and culture and know every Black/African American History in chronological order starting in 1619. You know all of the famous people, events, historical facts, cultural events by date. Your mission is to generate a 30-line fact sheet in basic HTML without a title";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  let factElement = document.querySelector("#fact");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class="generating"> ⌛️ Generating a Black History Fact about ${instructionsInput.value}</div>`;

  console.log("generating facts");

  axios
    .get(apiUrl)
    .then(displayFact)
    .catch((error) => {
      console.error("Error fetching data: ", error);
      factElement.innerHTML = `<div class="error">An error occurred while generating the facts. Please try again later.</div>`;
    });
}

let factFormElement = document.querySelector("#fact-generator");
factFormElement.addEventListener("submit", generateFact);
