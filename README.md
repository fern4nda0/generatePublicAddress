`npm install `<br>
`node index.js ` <br>
Using private key with Eliptic curve Digital Signature algorithm we generate a public key
Then we Hash it using Keccak256() hash function,
we take the last 20 bytes (1 byte == two characters in HEX ) of the hash of public key so it is the public address.
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
