# AdCompose - React.js App

## Description
AdCompose is an innovative ReactJS application integrating the power of OpenAI's ChatGPT API to swiftly generate engaging advertising text for your products,enhancing your marketing efforts and brand visibility.. Enhance your marketing strategy with automated, AI-powered promotional copy.

## Features
* User-friendly interface for product description inputs.
* Swiftly generates catchy and engaging promotional copy.
* Integrated with ChatGPT API, an AI developed by OpenAI.

### Quick start:
```
$ npm install
$ npm start
```

## Setup and Installation
1. Clone the repository.
```
git clone https://github.com/ginirator/reactjs-ad-compose-with-chatgpt.git
```

2. Navigate to the project directory.
```
cd reactjs-ad-compose-with-chatgpt
```

3. Install dependencies.
```
npm install
```

4. Create an `env.js` file in the root directory and add your OpenAI API Key, Model, and Max Tokens. Or duplicate the `env.js.temp` file and rename the duplicate as `env.js`. Make sure you replace `YOUR_OPENAI_API_KEY` in the `env.js` file with your actual OpenAI API Key. You can also change the model and max tokens if you want to. The default model is `davinci` and the default max tokens is `150`. You can find more information about the OpenAI API at https://beta.openai.com/docs/api-reference/introduction. The `env.js` file should look like this:

```
export const process = {
	env: {
		OPENAI_API_KEY: 'YOUR_OPENAI_API_KEY',
		OPENAI_MODEL: 'YOUR_MODEL',
		OPENAI_MAX_TOKENS: YOUR_MAX_TOKENS,
	}
}
```

5. Compile SCSS to CSS.
```
npm run scss
```

Alternatively, you can watch for changes in your SCSS file and compile it to CSS automatically.
```
npm run scss -- --watch
```

6. Start the development server.
```
npm start
```

### Usage
Fill in the product name, description, and target market in the respective fields.
Click on `Generate Copy` to get your promotional copy.

## FAQ
#### How do I get an OpenAI API Key?
You can get an OpenAI API Key by signing up for an account at https://beta.openai.com/.
#### How do I get an OpenAI Model?
You can get an OpenAI Model by signing up for an account at https://beta.openai.com/.
#### How do I get an OpenAI Max Tokens?
You can get an OpenAI Max Tokens by signing up for an account at https://beta.openai.com/.
#### Error when starting dev server:
On getting the following error `Error: Cannot find module 'node:path'` when starting the dev server.

The error you're encountering appears to be a result of Vite trying to use the 'path' module from a more recent version of Node.js than the one you're currently running.

As I mentioned before, starting from Node.js version 14.13.0, Node.js supports ECMAScript modules out of the box, and some new Node.js APIs were added that are only available as ECMAScript modules, including the built-in 'node:path' module.

Here are steps to fix this issue:

1. Check your Node.js version using the command:
```
node --version
```

2. If your Node.js version is older than 14.13.0, you'll need to upgrade it. If you're unsure about how to upgrade, one commonly used tool is `nvm` (Node Version Manager), which allows you to easily switch between Node.js versions. You can install or upgrade Node.js to the current LTS (Long Term Support) version using `nvm` with the following commands:
```
nvm install --lts
nvm use --lts
```

After upgrading Node.js, try running `npm start` again and see if the issue is resolved.

If you're already running Node.js 14.13.0 or newer, the issue might be with your Vite configuration. If this is the case, please make sure that you are importing the 'path' module correctly in your `vite.config.js` file.

For example, if you're using the 'path' module in your `vite.config.js` file like this:
```
import {defineConfig} from 'vite'

export default defineConfig({
	plugins: []
})
```

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License
GPL-2.0

### Contact
For any questions or concerns, please open an issue or pull request.

### Important Notes
This project uses node-sass for CSS preprocessing. The SCSS file is located at assets/css/style.scss. You can compile it to CSS using `npm run scss` or watch for changes with `npm run scss -- --watch`.

Please do not forget to star :star2: this repo if you found it useful! Happy Coding! :computer: