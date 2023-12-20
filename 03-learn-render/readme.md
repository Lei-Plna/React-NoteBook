# Learn Render

## Render Class Component and Functional Component
Today we will learn the render of React.<br/>
React use the function ReactDOM.render() <deprecated> to render the React Element.<br/>
Now It's reactDOM.createRoot() and call the render() function.<br/>
pay attention that the render function can only render one React Element.<br/>
It can't render the react component class directly but we can surround it with jsx syntax<br/>
And It can't render the functional component too.<br/>

## Virtual DOM in React
When we rerender the React Element, React doesn't replace the DOM node directly.<br/>
Instead, React creates a new version of the DOM node and then compares the new and old version.<br/>
Means that React will create a virtual DOM tree when we render the React Element.<br/>
The path of rerender is:
- construct virtual DOM tree <-> Each React Element
- create new virtual DOM tree -> compare new and old virtual DOM tree
- create patches -> apply patches to real DOM (render to real DOM)