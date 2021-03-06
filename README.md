# sha1-hash-and-verify

- [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://choosealicense.com/licenses/mit/)
- <a href="https://dev.to/imshivanshpatel" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="imshivanshpatel" height="30" width="40" /></a>
<a href="https://linkedin.com/in/shivansh-patel-4915b4171" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="shivansh-patel-4915b4171" height="30" width="40" /></a>
<a href="https://instagram.com/programming_updates" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="programming_updates" height="30" width="40" /></a>

- Secure Hash Algorithm 1 is a cryptographic hash function which generates a hash value which is typically rendered as a hexadecimal number of exactly 40 digits long. It produces a 160-bit hash value which is known as message digest.

```bash
npm i sha1-hash-and-verify  
```
- sha1 hashing

```javaScript
const {sha1}=require("sha1-hash-and-verify");

const hashedData=sha1("password");
console.log(hashedData);
```
- output
```
5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8
```

- verify

```javaScript
const {sha1,verifyHash}=require("sha1-hash-and-verify");

const hashedData=sha1("password");

const match=verifyHash("password",hashedData);

console.log(match);
```

- output

```
true
```


- Supports TypeScript

```typeScript
import {sha1} from "sha1-hash-and-verify";

const hashedData=sha1("password");
console.log(hashedData);
```