This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About This Project

See a screenshot here: https://ibb.co/V2S0t2M

Choose between a variety of texts that you would like the ChatGPT bot to type out after you define some essential values. This includes:
1. Love letter
2. Job advert
3. Cover to a job application
4. Study application rationale
5. Last Will & Testament
6. Pre-marital agreement
You can set a tone of voice as well the length of the text and copy paste the automatically generated text to clipboard.
Please, be aware that the OpenAI leadership may start charging for longer texts or require payment for more enhanced bots in the future, so it is good to monitor the current situation.


## Technologies used:

The app uses modern frameworks and libraries that leverage best practices, such as:
1. ReactJS
2. Tailwind CSS
3. Asynchronous API communication
4. antd

## Pre-requisities:

1. An API key in OpenAI - go to https://platform.openai.com/account/api-keys to register a key and place it in an .env file that contains: OPENAI_API_KEY = XXXXX
2. ReactJS version 18.2.0 or newer
3. NextJS version 13.1.3 or newer
4. antd library version 5.1.7 or newer - see https://ant.design/
5. TailWindCSS - see https://tailwindcss.com/docs/guides/create-react-app for detailed instructions when setting up a React app

## Launching your React-based server locally:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
