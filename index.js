import { Configuration, OpenAIApi } from "openai";
import { process } from "./env";

const configuration = new Configuration ({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const apiModel = process.env.OPENAI_MODEL;
const apiMaxTokens = process.env.OPENAI_MAX_TOKENS;

const setupInputContainer = document.getElementById('ad-input');

document.getElementById("submit-button").addEventListener("click", () => {
	const productName = document.getElementById("name").value;
	const productDesc = document.getElementById("desc").value;
	const productTarget = document.getElementById("target").value;

	if (!productName || !productDesc || !productTarget) {
		alert("Please fill all the fields");
		return;
	}

    setupInputContainer.innerHTML = `<img src="assets/images/loading.gif" alt="loading">`;
	getCopySuggestion(productName, productDesc, productTarget);
})

async function getCopySuggestion(productName, productDesc, productTarget) {
	const response = await openai.createCompletion({
		model: apiModel,
		prompt: `Create max 50 words of an advertising copy for a product. Use Product Name "${productName}", Description "${productDesc}", Target Market "${productTarget}"`,
		max_tokens: apiMaxTokens,
	});
	document.getElementById('ad-output-copy').insertAdjacentText('beforeend', response.data.choices[0].text.trim());
	document.getElementById('ad-input').style.display = 'none';
	document.getElementById('ad-output').style.display = 'block';
	console.log(response);
}
