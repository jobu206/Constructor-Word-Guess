# Constructor-Word-Guess
[![NPM version](http://img.shields.io/npm/v/npm-expansions.svg?style=flag-square)](https://www.npmjs.org/package/npm-expansions)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](./LICENSE)
[![npm package](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)

Welcome to the Baseball Word Guess Game! This is a CLI Node Application that asks for user input to guess a word. This applicatio also uses the Inquirer node package to take user inputs. The purpose of this application is to showcase Node JS Skills coupled with JS Constructor Functions.

## Demonstration
![Watch the Video](assets/gif/constructorGuessGame.gif)

## Getting Started
These instructions will get you up and running on your local machine for development and testing purposes.

### Prerequisites
You will need the following installed...

1. ***Node***
    1. Before you can install Node, you’ll need to install two other applications. Fortunately, once you’ve got these on your machine, installing Node takes just a few minutes.<sup>[1]</sup>

        1. XCode. Apple’s XCode development software is used to build Mac and iOS apps, but it also includes the tools you need to compile software for use on your Mac. XCode is free and you can find it in the Apple App Store.
            1. Via Terminal `xcode-select --install`

        1. Homebrew. Homebrew is a package manager for the Mac — it makes installing most open source sofware (like Node) as simple as writing brew install node. To install Homebrew just open Terminal and type `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`. You’ll see messages in the Terminal explaining what you need to do to complete the installation process.
            1. Now type `brew install node`.

1. ***Inquirer Node Package***
     1. [Inquirer](https://www.npmjs.com/package/inquirer) is a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) based Node Package which consumes user input to control responses.
          1. To install simply run `npm i inquirer` in your application directory.
               1. You must have Node installed first, prior to running the above command.

1. ***Running App***
     1. Syntax is as follows...
          1. `node index.js`

### Deployment Notes
Because this is does not run in the browser, you will need to do some setup on your own to get up and rolling.

1. Fork the project
    1. https://github.com/jobu206/Constructor-Word-Guess/fork
1. In your local dir, you will want to run `npm init -y` to install all required packages & generate JSON files.

## Built With
1. [NodeJS](https://nodejs.org/en/) - The JS framework used.
2. [Inquirer](https://www.npmjs.com/package/inquirer) - Promise based Node package which consumes user input.

## Contributing

1. Fork it (https://github.com/jobu206/Constructor-Word-Guess/fork)
1. Create your feature branch `git checkout -b feature/Constructor-Word-Guess`
1. Commit your changes `git commit -am 'Add some yourMessageHere'`
1. Push to the branch `git push origin feature/Constructor-Word-Guess`
1. Create a new Pull Request

## Authors

**Kevin LeRoy** - <a href="https://kevinleroy.me" target="_blank">https://kevinleroy.me</a>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

[1] Adapted from instructions found here: <a href="https://blog.teamtreehouse.com/install-node-js-npm-mac" target="_blank">https://blog.teamtreehouse.com/install-node-js-npm-mac</a>