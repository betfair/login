# Developing this package
We are happy to accept pull requests for this package  


## Starting development
### Required Software
Before you clone this repo, you will need to install:  
- Git
- Node / NPM  
- Typescript

They you can clone this repo to your machine like this:  
```
git clone https://github.com/betfair/login.git
```
Open command line to the root folder and install all the required packages like this:   
```
npm install
```

Create a private file with your details in like this:  
Create a new file called `.env` in the root directory of your project and populate it like this:  
(DO NOT CHECK THIS FILE IN)
```
BFUSERNAME=[YOUR_BETFAIR USERNAME]
BFPASSWORD=[YOUR_BETFAIR_PASSWORD]
BFAPPKEY=[YOUR_BETFAIR_APPKEY]
```


Run the tests to confirm everything is working correctly:  

```
npm test
```