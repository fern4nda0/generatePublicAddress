const util = require("ethereumjs-util");
const ethers = require("ethers");
const secp256k1 = require("secp256k1");
require("dotenv").config();

const wallet = ethers.Wallet.createRandom();
console.log("address:", wallet.address);
console.log("mnemonic:", wallet.mnemonic.phrase);
//Firstly we create a random wallet and takes its private key

const privateKey = wallet.privateKey;
console.log("privateKey:", privateKey);
///---------------------------------
let arr1 = util.toBuffer(privateKey); // for random
let arr2 = util.toBuffer(process.env.pkey); // for manual address
// console.log("buffer: " +arr2);
// so by using private key with Eliptic curve Digital Signature  algorithm we generate a public key
// const publicKey = util.privateToPublic(arr2);
const publicKey = secp256k1.publicKeyCreate(arr1, false).slice(1);
console.log(publicKey);
console.log(typeof publicKey);
const hashPublicKey = ethers.utils.keccak256(publicKey);
/*then we get the hash of public key so we need to
 get the last bytes20 of that so that we get 
the  Public Address*/
console.log("Hashed public key : %s  ", hashPublicKey);
const publicAddress = hashPublicKey.slice(-40); //1byte == 8bits    //  1byte is 2 hex characters
const publicAddress0x = "0x" + publicAddress;
const originalAddress = "0xb30BA359c8dc92d969186cdf7b3eBd7a60BdEcF5";
console.log("PublicAddress:  " + "0x" + publicAddress);

if (publicAddress0x == originalAddress.toLocaleLowerCase()) {
  console.log("✅TRUE");
} else if (publicAddress0x == wallet.address.toLocaleLowerCase()) {
  console.log("✅TRUE (RANDOM GENERATED )");
} else {
  console.log("❎FALSE");
}
