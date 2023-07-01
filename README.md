# server-deployment-practice LAB 01

## Author: Emily Greason

## RENDERED PAGE:

https://server-deployment-practice-main-uttr.onrender.com/hello

## GITHUB ACTIONS:

https://github.com/greasonek/server-deployment-practice/actions/new

## PULL REQUEST:

https://github.com/greasonek/server-deployment-practice/pull/1

~[lab-01-drawing](./img/lab-01-drawing.png)

### NOTES:

- **Modular code!**
    - Reusable blocks of code for plug n play
    - Readability, reuse, scalabl=ility
- We will be adding testing to projects in a formal way

- *What is a server??*
    - Host for the browser where information is stored
    - A middleman 
    - Your laptop is also a server
    - Functions can be servers
    - ANYTHING that can accept a request and serve back an answer is a server
    - -in an app, you have clients and servers at every logical point in the code
    - node.js is NOT a server, it is a tool you can use to make a server

‘Server’ and ‘app’ are interchangeable in terms of building a route —> in 301 we used app.get(), in today’s lecture we used ‘server.get() but they are the same thing 

Modularize server.js
Add tests
Add GitHub workflow (for continuous integration)
Push up to dev branch on GitHub  —> if it passes tests
Create a render.com deployment from the dev branch 
	- if that deployment looks good then merge dev to main 
	- if tests pass create a  new render.com deployment to main

GitHub workflow in configs on the class repo —> put in javascript-test.yml file 
When pushing up —> git add .github that way it pushes that folder up