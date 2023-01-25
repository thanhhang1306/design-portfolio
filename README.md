# Design Portfolio
## About / Synopsis

* This website is created using Node.js and acts as Hang Pham's Design Portfolio. Node packages used include Express, body-parser, ejs. 
* For front-end development, Bootstrap and jQuery libraries are used. 



## Requirements
For remotely hosted site, click [here](https://web-production-fdda.up.railway.app/). Site is hosted using [Railway](https://railway.app/).

If link does not work, copy https://web-production-fdda.up.railway.app/ to your browser address search. 

For development, you will only need Node.js and a node global package, Yarn or npm, installed in your environement.

### Node
- #### Node installation on MacOS
  You can install nodejs using the following command (require homebrew): 

      $ brew install node

   Or, go to the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/) to download the appropriate packages.
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v19.4.0

    $ npm --version
    9.2.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
###
### npm installation
   npm is installed with Node.
###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install the project to local directory
    $ cd [PATH_TO_FOLDER]
    $ git clone https://github.com/thanhhang1306/design-portfolio.git [FOLDER_NAME]
    $ yarn install OR $ npm init 

## Running the project locally 

    $ yarn start OR $ node app.js

   Recommendation: Install [nodemon](https://www.npmjs.com/package/nodemon) for automatic restart of the node application when file changes in the directory are detected.


