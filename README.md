# Welcome to ACMembership Minting Dapp 🎨

Currently Hosted at: *https://main--preeminent-crumble-02b163.netlify.app/*

Any changes to this repo will result in changes to the above url. It will take about 3 minutes for netlify to build and deploy the changes to the site.

# The Artist Collective Membership NFT

## Installation 🛠️

```sh
npm install
```

## Usage ℹ️

In order to make use of this dapp, all you need to do is change the configurations to point to your smart contract as well as update the images and theme file.

For the most part all the changes will be in the `public` folder.

To link up your existing smart contract, go to the `public/config/config.json` file and update the following fields to fit your smart contract, network and marketplace details. The cost field should be in wei.

Note: this dapp is designed to work with the intended NFT smart contract, that only takes one parameter in the mint function "mintAmount". But you can change that in the App.js file if you need to use a smart contract that takes 2 params.

```json
{
  "CONTRACT_ADDRESS": "0x8ee202cc7d35a75063209cc59ec5a65cc536ad6f",
  "SCAN_LINK": "https://rinkeby.etherscan.io/address/0x8ee202cc7d35a75063209cc59ec5a65cc536ad6f",
  "NETWORK": {
    "NAME": "Rinkeby",
    "SYMBOL": "rETH",
    "ID": 4
  },
  "NFT_NAME": "ACMembership",
  "SYMBOL": "ARTCO",
  "MAX_SUPPLY": 0,
  "WEI_COST": 35000000000000000,
  "DISPLAY_COST": 0.035,
  "GAS_LIMIT": 285000,
  "MARKETPLACE": "Opeansea Testnets",
  "MARKETPLACE_LINK": "https://testnets.opensea.io/collection/the-ac-membership-inciakgsxw",
  "SHOW_BACKGROUND": true
}
```

Make sure you copy the contract ABI from remix and paste it in the `public/config/abi.json` file.

Now you will need to create and change 2 images and a gif in the `public/config/images` folder, `bg.png`, `example.gif` and `logo.png`.

Next change the theme colors to your liking in the `public/config/theme.css` file.

```css
:root {
  --primary: #ebc908;
  --primary-text: #1a1a1a;
  --secondary: #ff1dec;
  --secondary-text: #ffffff;
  --accent: #ffffff;
  --accent-text: #000000;
}
```

Now you will need to create and change the `public/favicon.ico`, `public/logo192.png`, and
`public/logo512.png` to your brand images.

Remember to update the title and description the `public/index.html` file

```html
<title>SBUDZ</title>
<meta name="description" content="Mint your ACMembership NFT" />
```

Also remember to update the short_name and name fields in the `public/manifest.json` file

```json
{
  "short_name": "ARTCO",
  "name": "ACMembership NFT"
}
```

After all the changes you can run.

```sh
npm run start
```

Or create the build if you are ready to deploy.

```sh
npm run build
```

Now you can host the contents of the build folder on a server.

That's it! you're done.

*Most of the code in this repo was created by HashLips*
