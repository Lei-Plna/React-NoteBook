# 02-Learn-JSX
JSX can't be read by the browser, so it needs to be compiled into JavaScript. That we need install Vite to compile the JSX code.
## Preparation: develop environment
use snippet `pnpm init` and `pnpm install vite --save-dev` to install vite.

because we use the CDN to import React, so if your internet is not good, perhaps the script hard to load. You can use `pnpm install react react-dom` to install React and ReactDOM.

or you can use the ladder/vpn to speed up your network.

## JSX-Basic-Usage
Introduce the basic information of the jsx, how to create a jsx element and how to render it.

JSX:
1. jsx is a template language and the syntax expansion of javascript.
2. not string, not html tag.
3. intuitionally describe the structure and interaction of the UI.
4. generate React element.
5. in the same vein as React.createElement.

## JSX-Compare
1. Compare the difference between JSX and React.createElement.
2. How to render a list of elements by JSX.

## JSX-Class-Component
1. Combine the JSX and react class component to create a simple component.
2. Use the class component in the JSX.
3. React.Fragment simple experience.
