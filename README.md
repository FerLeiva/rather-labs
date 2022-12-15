# Rather Labs Survey
This is a Nextjs Dapp that consumes a Solidity contract. Rewards you with tokens for participating in a survey. You can connect through your Metamask wallet and try it easily!. It consists of a platform where customers can take surveys and earn $Quiz tokens as rewards. The app uses Ant Design for styling, react-moralis for contract connection, and Nextjs as the main framework.

# The application
It is running within the Vercel platform and can be visited via:

https://rather-labs-alpha.vercel.app/

A client can access through their Metamask wallet and take the survey of the day through a simple button. Once it has started, they will have a limited number of seconds to answer each question. Whether or not they choose an option, at the end of the the timer it will automatically go to the next question, taking the last selected or the default answer as the answer. Once all the questions are finished, an interface will be displayed where you can view all the questions in order with their respective answers. When you click the finish button, an alert will be displayed and the page will automatically give you an amount of tokens given by the contract while returning you to the main page.

The application uses moralis for blockchain connection and obtains the necessary information from your metamask wallet to be able to carry out the different internal transactions of the contract. Token balance information is also obtained from the contract. The surveys are consumed through JSON files, and can be easily created and dynamically editable.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Multimedia

You can watch a video of the application process through the following link:

https://www.loom.com/share/901c94f3f9d149e7a58c890fdddfcaef

Here are some snapshots of the app:

![image](https://user-images.githubusercontent.com/66581357/207750478-f8f2cfdf-d320-4c91-a8c8-463fe700a8d7.png)

![image](https://user-images.githubusercontent.com/66581357/207750531-a6193e57-7157-4aab-b67e-6a61852d2cba.png)

![image](https://user-images.githubusercontent.com/66581357/207750574-0bb42c61-4a17-415a-a5a0-b1244fc50f97.png)


## Getting Started Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
