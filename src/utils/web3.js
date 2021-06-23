const Web3 = require('web3');


const web3 = new Web3(
    new Web3.providers.HttpProvider('http://192.168.43.34:7545')
);

// web3.eth.getBlock('latest').then(console.log)

// console.log(web3);
var acc;
web3.eth.defaultAccount = web3.eth.accounts[0];
web3.eth.getAccounts().then(function (accounts) {
    // console.log(accounts);
    acc = accounts[0];
});

var aib = [
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint32",
                "name": "location",
                "type": "uint32"
            }
        ],
        "name": "return_avail_vacc",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "hos_name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint16[4]",
                        "name": "hos_vaccine",
                        "type": "uint16[4]"
                    }
                ],
                "internalType": "struct Vaccine_available.hos_data[10]",
                "name": "",
                "type": "tuple[10]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint32",
                "name": "location",
                "type": "uint32"
            },
            {
                "internalType": "uint256",
                "name": "hos_code",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "curr_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "selected_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "slot",
                "type": "uint8"
            }
        ],
        "name": "booking",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            },
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

var address = "0x537472cE26Fb78b0A22f2434F732406c24E1eE42";

export const web3Api = new web3.eth.Contract(aib, address);
