let vm = new Vue({
    el: "#app",
    data: {
      selectedAccount: '',
      selectedAccountshort: '',
      chainName: '',
      salesStage: 0,
      isconnected: false,
      ismintable: false,
      ischangemintqty: false,
      ismainnet: false,
      minted: '',
      qty: 1,
      mintedqty: 0,
      alsignature: '',
      alqty: 0,
      minttxresult: ''
    }

  })

  const Web3Modal = window.Web3Modal.default;
  const WalletConnectProvider = window.WalletConnectProvider.default;

  let web3Modal;
  let provider;
  let acmembership;
  let mintTotal;
  let contractAddress;
  let contractABI;

  function init() {
    
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "cc7561dbfa8e4d8e9578646e37f6cecd",
        }
      }
    };

    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    });
    let web3contract = new Web3('https://rinkeby.infura.io/v3/cc7561dbfa8e4d8e9578646e37f6cecd');
    contractAddress = '0x8ee202cc7d35a75063209cc59ec5a65cc536ad6f';
    contractABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"uint256","name":"_allowMintingOn","type":"uint256"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"uint96","name":"_royaltyFeesInBips","type":"uint96"},{"internalType":"string","name":"_contractURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"calculateRoyalty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_contractURI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setIsPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_royaltyReceiver","type":"address"},{"internalType":"uint96","name":"_royaltyFeesInBips","type":"uint96"}],"name":"setRoyaltyInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]

    mintTotal = new web3contract.eth.Contract(contractABI, contractAddress)
  }

  async function fetchAccountData() {

    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId == '4') {
      vm.ismainnet = true
    }

    const accounts = await web3.eth.getAccounts();
    acmembership = new web3.eth.Contract(contractABI, contractAddress)
    vm.selectedAccount = accounts[0];
    vm.isconnected = true;
    const shortacc = left(accounts[0], 6) + '...' + right(accounts[0], 4)
    vm.selectedAccountshort = `Wallet Address :${shortacc}`;

    checkalremainqty();
  }

  
  async function onConnect() {
    try {
      provider = await web3Modal.connect();
    } catch (e) {
      console.log("Could not connect to a wallet.", e);
      return;
    }
    await refreshAccountData();
  }

  async function onDisconnect() {
    if (provider.close) {
      await provider.close();
      await web3Modal.clearCachedProvider();
      provider = null;
    }
    vm.selectedAccount = null;
    vm.isconnected = false;
  }

  function gettotalsupply() {
    mintTotal.methods.totalSupply().call().then(function (result) {
      vm.minted = result + " Current Memberships";
    });
  }
 

  function tokenMint() {
    let options = {
      from: vm.selectedAccount,
      value: 0,
    }
    acmembership.methods.tokenMint(vm.qty, vm.alqty, vm.alsignature).send(options, function (error, result) {
      if (error) {
        if (error.message.includes("User denied transaction")) {
          vm.minttxresult = "User denied transaction";
        }
      } 
      else {
        vm.minttxresult = "Sending transaction to the blockchain";
      }
    })
  }

  window.addEventListener('load', async () => {
    init();
    document.querySelector(".connect").addEventListener("click", onConnect);
    document.querySelector(".mintenable").addEventListener("click", tokenMint);
    gettotalsupply();
  });
