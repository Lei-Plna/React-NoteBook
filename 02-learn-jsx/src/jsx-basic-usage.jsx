/**
 * JSX
 * 1. jsx is a template language and the syntax expansion of javascript
 * 2. not string, not html tag
 * 3. intuitionally describe the structure and interaction of the UI
 * 4. generate React element
 * 5. in the same vein as React.createElement
 */
const realReactElement = <h1 key={1}>This is my first JSX element</h1>;

/**
 * In JSX, we need use camelCase to name the attribute
 * and it's different from html
 * like:
 *  class -> className
 *  onclick -> onClick
 *  and so on ..
 * Here's an example:
 */
const handleClick = () => void 0;
const jsxElementAttribute = (
  <h1 key={2} className="jsx-element" onClick={handleClick}>
    This is a JSX element
  </h1>
);

/**
 * Compare the difference between JSX and React.createElement
 *  same:
 *
 *  different:
 */
const reactCreateElementExample = React.createElement(
  'h1',
  {
    className: 'react-title',
    key: 3,
  },
  'This is my first JSX element'
);

/**
 * jsx element always be wrapped by ()
 * because it's not a string or html tag
 * it's a syntax expansion of javascript
 * so we need to use () to wrap it
 * like: 
 */
const reactJsxElementExample = (
  <h1 key={4} className="react-title">
    This is my first JSX element
  </h1>
);

/**
 * it's special that we can use the tag <></> to wrap the jsx element
 * it will be compiled to React.Fragment
 * it's useful when we need to return multiple jsx element
 *
 * if we want to insert the jsx element into the React.Fragment tag
 * we need to use {} to wrap it
 * like:
 */
const reactJsxRootElementExample = (
  <>
    {realReactElement}
    {jsxElementAttribute}
    {reactCreateElementExample}
    {reactJsxElementExample}
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  reactJsxRootElementExample
);
