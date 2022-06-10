# setup-liferay-fragment-test

![npm](https://img.shields.io/npm/v/setup-liferay-fragment-test)

setup-liferay-fragment-test exports one tiny function that reads a local fragment.json config for a Liferay fragment, then reads the HTML, CSS, and JS files it points to and loads them into the DOM. (It also parses Freemarker in the HTML.) This is useful for automated testing of Liferay fragments.

## Installation
```
yarn add setup-liferay-fragment-test --save-dev
```

## Usage
A simple example of how to use setup-liferay-fragment-test is right here in this repository! See [index.test.js] for some basic Jest + DOM Testing Library tests that load the sample fragment in this repository and then poke at it.

## About
This is a super basic module I cooked up in a couple hours. Feel free to contribute changes.
