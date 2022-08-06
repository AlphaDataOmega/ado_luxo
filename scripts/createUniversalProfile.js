const Web3 = require('web3');
const web3 = new Web3();
const { LSPFactory } = require('@lukso/lsp-factory.js');

const PRIVATE_KEY = '0xc1ed1588ab16df03806f0f2f7922e157440a6a35c1c14ee637336203a8adcd21'; // your EOA private key (created in step 1)
const myEOA = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

const lspFactory = new LSPFactory('https://rpc.l14.lukso.network', {
  deployKey: PRIVATE_KEY,
  chainId: 22,
});

async function createUniversalProfile() {
  const deployedContracts = await lspFactory.UniversalProfile.deploy({
    controllerAddresses: [myEOA.address], // our EOA that will be controlling the UP
    lsp3Profile: {
        "LSP3Profile": {
            "name": "frozeman",
            "description": "The inventor of ERC725 and ERC20...",
            "links": [
            { "title": "Twitter", "url": "https://twitter.com/feindura" },
            { "title": "lukso.network", "url": "https://lukso.network" }
            ],
            "tags": ["brand", "public profile"],
            "avatar": [
            {
                "hashFunction": "keccak256(bytes)",
                "hash": "0x98fe032f81c43426fbcfb21c780c879667a08e2a65e8ae38027d4d61cdfe6f55",
                "url": "ifps://QmPJESHbVkPtSaHntNVY5F6JDLW8v69M2d6khXEYGUMn7N",
                "fileType": "fbx"
            }
            ],
            "profileImage": [
            {
                "address": 0x1231c7436a77a009a97e48e4e10c92e89fd95fe15, // the address of an LSP7 or LSP8
                "tokenId": 0xdde1c7436a77a009a97e48e4e10c92e89fd95fe1556fc5c62ecef57cea51aa37 // (optional) if token contract is an LSP7
            }
            ],
            "backgroundImage": [
            {
                "width": 1800,
                "height": 1013,
                "hashFunction": "keccak256(bytes)",
                "hash": "0x98fe032f81c43426fbcfb21c780c879667a08e2a65e8ae38027d4d61cdfe6f55",
                "url": "ifps://QmPJESHbVkPtSaHntNVY5F6JDLW8v69M2d6khXEYGUMn7N"
            },
            {
                "width": 1024,
                "height": 576,
                "hashFunction": "keccak256(bytes)",
                "hash": "0xfce1c7436a77a009a97e48e4e10c92e89fd95fe1556fc5c62ecef57cea51aa37",
                "url": "ifps://QmZc9uMJxyUeUpuowJ7AD6MKoNTaWdVNcBj72iisRyM9Su"
            }
            ]
        }
        },
  });

  const myUPAddress = deployedContracts.LSP0ERC725Account.address;
  console.log('my Universal Profile address: ', myUPAddress);

  return deployedContracts;
}

createUniversalProfile().then((deployedContracts) => {
  console.log(deployedContracts);
});