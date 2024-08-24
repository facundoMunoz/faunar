<!-- SUMMARY -->
<div align="center">

# FaunAr

FaunAr shows information about Argentinian wildlife through a NodeJS website and a React Native app.

[![Licence][license-shield]](./LICENSE)

</div>

<!-- SCREENSHOTS -->
<details> <summary>Screenshots</summary>

### Website
![screenshot1](./img/screenshot-1.png)
![screenshot1](./img/screenshot-2.png)

### Mobile App
![screenshot1](./img/screenshot-3.png)
![screenshot1](./img/screenshot-4.png)

</details>

<!-- BUILT WITH -->
## Built With

- [![HTML][html-shield]][html-url]
- [![CSS][css-shield]][css-url]
- [![JAVASCRIPT][javascript-shield]][javascript-url]
- [![NODEJS][nodejs-shield]][nodejs-url]
- [![REACTNATIVE][reactnative-shield]][reactnative-url]

<!-- GETTING STARTED -->
## Getting Started

- Clone the repo using the command
```
git clone https://github.com/facundoMunoz/faunar.git
```
- Open a Terminal/CMD in */faunar/mobile-app/faunar* and use the following command:
```
npm i
```

### Prerequisites

- [NodeJS](https://nodejs.org/en/download)

<!-- USAGE -->
## Usage

- Replace *YourIP* with hosts IPv4 in the folowing directories:

  - */faunar/web/app.js*


  ```javascript
  const ip = 'YourIP';
  ```

  - */faunar/mobile-app/faunar/app/Constants/constants.js*


  ```javascript
  const IP = 'YourIP';
  ```

### Website

- In */faunar/web* start the NodeJS server:

```
node app.js
```

- Using any browser go to ***IP*:3000** replacing *IP* with the hosts IPv4

### Mobile app

- With the NodeJS server running, go to */faunar/mobile-app/faunar* and start the app:

```
npm start
```

- Open Expo and scan the QR code.

<!-- CONTACT -->
## Contact
[![GITHUB][personal-shield]][personal-url] [![LINKEDIN][linkedin-shield]][linkedin-url]

<!-- MARKDOWN LINKS AND IMAGES -->
<!-- BUILT WITH -->
[html-shield]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://developer.mozilla.org/es/docs/Web/HTML
[css-shield]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/es/docs/Web/CSS
[javascript-shield]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[javascript-url]: https://developer.mozilla.org/es/docs/Web/JavaScript
[nodejs-shield]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/en
[reactnative-shield]: https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[reactnative-url]: https://reactnative.dev/
<!-- LICENSE -->
[license-shield]: https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge
<!-- MY GITHUB -->
[personal-shield]: https://img.shields.io/badge/FACUNDO-MU%C3%91OZ-yellowgreen?style=for-the-badge
[personal-url]: https://github.com/facundoMunoz
<!-- MY LINKEDIN -->
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/facundomunozdev/
