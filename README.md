# E-Kars: The Amazon of Used Electric Cars

[LIVE LINK](https://e-kars.herokuapp.com/)

E-Kars is a (hypothetical) e-Commerce project that sells used electric cars. Features include full user authentication (register, login, and forgotpassword with SendGrid), Stripe payment system, and Redux for state management.

![E-Kars Demo](images/ekars_gif_1.gif)
_E-Kars General Demo_

On the products page, you can place multiple filters with the sidebar on the left. Using Redux was extremely useful in order to pass multiple levels of state between each React component.

![E-Kars Demo](images/ekars_productsPage.gif)

I created a custom form using Stripe for check out. However, to get to this page, you must be logged in first. See below to use my test account!

![E-Kars Stripe](images/ekars_stripe_checkout2.gif)
_E-Kars Stripe Payment Demo_

## Technologies Used

React.js, Redux, Node.js/Express, MongoDB/Mongoose, SendGrid, Stripe

## Getting Started

To get the project up and running, complete the following steps:

1. Download and install Node: <https://nodejs.org/>
2. Clone this repo: `git clone https://github.com/bryanyi/e-kars.git` (HTTPS)
3. Install project dependancies: `npm install`
4. Start the development environment: `npm run dev`
5. Open your browser and visit <http://localhost:3000>

## LOGIN with my test account.

![Ekars Login](images/ekars_login.png)

Feel free to browse with the intention of buying a few cars. Upon proceeding to checkout, you will be asked to login before being allowed to proceed with the purchase.
You can use my ID & PW for testing. However, if you want to see what the "forgot password" workflow is like, you can register your own email, or refer to the gif below!

`ID: Bryanyi1206@gmail.com`
`PW:123456`

![E-Kars Forgot Password Workflow](images/ekars_forgotpassword.gif)
_E-Kars Stripe Payment Demo_
