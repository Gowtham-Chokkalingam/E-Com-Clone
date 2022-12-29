 <h1> Flipkart Clone</h1>
<h2>
This is a solo project, a clone of the famous e-commerce website Flipkart. I have implemented various features in this project like User authentication using context API, searching products, and adding products into the cart with quantity updating buttons. I have used React to build the Front-end and MongoDB for the Back-end. & MUI used for styling.

</h2>
<br/>

<h2><i>🎯 Using Languages & Tools 🧰</i></h2>
<br/>

<p align="center">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3" />
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="expressjs" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="postman" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
   <img src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra-ui" />
   <img src="https://img.shields.io/badge/-Material--UII-blue" alt="redux" />
 </p>
<br>

🎯## Project is live at below link 🔗
<a href="https://filpkart-clone-clientgc.onrender.com/">

<h2>
 Flipkart-Clone
</h2>
 </a>
<br>

🎯 Features

- Responsive Laniding Page.
- Login/Signup page.
- Landing page which displays all the products.
- Product Details page.
- Add Product to cart.
- Cart items quantity increment and decrement.
- Checkout page and payment page.
- Slider for bannner in landing page
- Products Search Functionlity
- Created the Api for product , Authentication, and cart
- ## Dependencies:

### Front-end

    1) react
    2) react-dom
    3) react-scripts
    4) styled-components
    5) react-router-dom
    6) react-icons
    7) material-UI
    8) react-multi-carousel
    9) react-countdown
    10) axios
    11) redux, redux thunk, react-redux

### Backend

    1) express
    2) cors
    3) dotenv
    4) mongoose
    5) nodemon 


## Landing Page

 <img src="/Frontend/public/assets/Fipkartclone.png" alt="Landing Page" />

## Product Page

 <img src="/Frontend/public/assets/FlipkartProductDetail.png" alt="product Page" />

## Cart Page

 <img src="/Frontend/public/assets/FlipkartCartpage.png" alt="checkout Page" />

## login Page

 <img src="/Frontend/public/assets/FlipkartLogin.png" alt="login Page" />




## Setting Up Project in local

### Frontend

#### 1) Setting up node environment

    1) navigate to Frontend directory
    2) use node version 16 or 18.12.1 is recommended
    3) run command npm install or npm i --legacy-peer-deps it will install all the required Dependencies with no errors.

#### 2) Starting frontend on localhost
(make sure you are confirming url of server)

    npm start /*or*/ npm run start

#### 3) Making Production ready folder

    npm run build

### Server

#### 1) Setting up node environment

    1) navigate to Backend directory
    2) use node version 16 or 18.12.1 is recommended
    3) run command npm install or npm i --legacy-peer-deps


#### 1) Starting Server in deployment

    npm start

#### 1) Starting Server with nodemon on locahost

    npm run server

### Database: MongoDB

#### 1) Atlas

    in .env file provide MONGODB_URL with proper credentials

#### 2) Local database

    if MONGODB_URL not declared in .env, by default it will connect to local data base

    in case not working try changing MONGODB_URL by creating your own in MongoDB Atlas server
