/**
 * Today we will learn the render of React.
 * React use the function ReactDOM.render() <deprecated> to render the React Element.
 *  Now It's reactDOM.createRoot() and call the render() function.
 * pay attention that the render function can only render one React Element.
 *  It can't render the react component class directly but we can surround it with jsx syntax
 *  And It can't render the functional component too.
 */
const functionalComponent = () => {
  return (
    <div>
      <h1>Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * It will cause error as below:
 * Functions are not valid as a React child.
 * This may happen if you return a Component instead of <Component /> from render.
 * Or maybe you meant to call this function rather than return it.
 */
// root.render(functionalComponent)

/**
 * Here recommend two ways to render the functional component.
 *  1. Surround the functional component with jsx syntax.
 *  2. Use the React.createElement() function to create the React Element.
 */
root.render(<functionalComponent />);
root.render(React.createElement(functionalComponent));

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
      </div>
    );
  }
}
/**
 * Also it will cause error as same as the functional component above. (See Line 17-20)
 */
// root.render(ClassComponent)
/**
 * Two ways to render the class component as same as the functional component above. (See Line 29-30)
 */
root.render(<ClassComponent />);
root.render(React.createElement(ClassComponent));

/**
 * Add one more thing that Single React Element only can own one root element.
 * As same in the jsx syntax.
 * For instance:
 */

/* 
multiple root even can't pass the compilation of jsx syntax.
const multipleRootJsx = (
  <div></div>
  <div></div>
)
 */

/**
 * if you actually want to have multiple root elements, you can wrap them in a fragment.
 * Here is the example:
 */
const fragmentMultipleRootJsx = (
  <>
    <div></div>
    <div></div>
  </>
);
