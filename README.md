Edupay: Crypto-Based School Payment System
Edupay is a decentralized application designed to handle school payments using cryptocurrency. Built with Next.js, TypeScript, Coinbase's OnchainKit, and Wagmi, this project aims to streamline the payment experience for educational institutions.

Table of Contents
Features
Technologies Used
Getting Started
Prerequisites
Installation
Project Structure
Scripts
Contributing
License
Features
Secure Wallet Integration using Coinbase's OnchainKit and Wagmi
User Registration and Authentication
Real-Time Balance Updates
Transaction History
Payment Confirmation and Receipts
Technologies Used
Next.js - Framework for server-rendered React applications
TypeScript - Superset of JavaScript for static typing
Coinbase's OnchainKit - For crypto wallet integrations and on-chain interactions
Wagmi - React hooks for Ethereum-based apps
Tailwind CSS - Utility-first CSS framework
React-Chart.js - For data visualization (balance overview chart)
React-Icons - Icon library for easy icon usage
Getting Started
Prerequisites
Ensure the following software is installed on your machine:

Node.js (>= 14.x.x) and npm (>= 6.x.x) - Download here
Git - Download here
Installation
Clone the repository

bash
Copy code
git clone https://github.com/Thedongraphix/edupay
cd edupay
Install dependencies

Run the following command to install the required dependencies:

bash
Copy code
npm install
Setup TypeScript configuration

Make sure your tsconfig.json is properly set up. A typical configuration might include:

json
Copy code
{
  "compilerOptions": {
    "module": "esnext",
    "target": "es6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true
  },
  "include": ["src"]
}
Add Tailwind CSS

To set up Tailwind CSS, install the package:

bash
Copy code
npm install -D tailwindcss
Configure Tailwind by creating a tailwind.config.js file:

bash
Copy code
npx tailwindcss init
Run the application

Start the development server:

bash
Copy code
npm run dev
The application should now be available at http://localhost:3000.

Project Structure
Here is an overview of the project structure:

lua
Copy code
├── src
│   ├── app
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   │   └── global.css
│   ├── hooks
│   ├── utils
│   └── ...
├── next.config.js
├── tsconfig.json
└── ...
Scripts
npm run dev - Starts the development server.
npm run build - Builds the project for production.
npm run start - Runs the production build.
npm run lint - Lints the codebase for syntax errors.
Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

License
This project is licensed under the MIT License.





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
