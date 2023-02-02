`npm install `<br>
`node index.js ` <br>
Using private key with Eliptic curve Digital Signature algorithm we generate a public key
Then we Hash it using Keccak256() hash function,
we take the last 20 bytes (1 byte == two characters in HEX ) of the hash of public key so it is the public address.

#### ex:
```js
address: 0x94f3A46E114551A9b54032fdBd4e03CBd28bF958
mnemonic: wheat upper dove track tail tiny often enact process thank whisper all
privateKey: 0xb2a0e575703eaf4ea0b97c123296df7be98e18e9afefdc402f9d947077870bcb

Hashed public key : 0x4a7eb3537240c9fa39a5931894f3a46e114551a9b54032fdbd4e03cbd28bf958  
PublicAddress:  0x94f3a46e114551a9b54032fdbd4e03cbd28bf958
✅TRUE (RANDOM GENERATED )
Here true means address == publicAddress
we used private key to generate it 
```



<br>

Below is a vanity address generator .credits who ever created it .
<br>

`node vanity.js   `

```js
const vanityAddresses = ["0x0000"];
```

```
we get 0x00023....72
```
