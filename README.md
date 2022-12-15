This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Rather Labs Survey
This is a Nextjs Dapp that consumes a Solidity contract. Rewards you with tokens for participating in a survey. You can connect through your Metamask wallet and try it easily!. It consists of a platform where customers can take surveys and earn $Quiz tokens as rewards. The app uses Ant Design for styling, react-moralis for contract connection, and Nextjs as the main framework.

# The application
It is running within the Vercel platform and can be visited via:

https://rather-labs-alpha.vercel.app/

A client can access through their Metamask wallet and take the survey of the day through a simple button. Once it has started, they will have a limited number of seconds to answer each question. Whether or not they choose an option, at the end of the the timer it will automatically go to the next question, taking the last selected or the default answer as the answer. Once all the questions are finished, an interface will be displayed where you can view all the questions in order with their respective answers. When you click the finish button, an alert will be displayed and the page will automatically give you an amount of tokens given by the contract while returning you to the main page.

The application uses moralis for blockchain connection and obtains the necessary information from your metamask wallet to be able to carry out the different internal transactions of the contract. Token balance information is also obtained from the contract.

# Specifications and dependencies:

* React version: 18.2.0
https://es.reactjs.org/

* Next.js version: 13.0.6
https://nextjs.org/

* Typescript version: 4.9.3
https://www.typescriptlang.org/

* Ant Design version: ^5.0.4
https://ant.design/

* Ethers.js version: ^5.7.2
https://docs.ethers.org/v5/

* Moralis version: ^1.11.0
https://moralis.io/

* Sweet Alert 2 version: ^11.6.15,
https://sweetalert2.github.io/

# Dev dependencies:

* Eslint version: 8.13.0
https://eslint.org/

* Prettier version: 2.6.2
https://prettier.io/

Rather Labs Surveys - Created by @effeleiva 
