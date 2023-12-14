/**
 * JSX Class Component
 * as we known that the react component need define a render method to return a React element
 * we can use React.createElement to create a React element
 * also we can use JSX to create a React element
 * and it will be more readable, concise and easy to maintain
 *
 * maybe someone will ask that why not distinguish the logic and view exactly
 * but it will be more complex and hard to maintain
 * like Vue it split a component to three parts: template, script and style
 * but in React, it also be split, just all in one class
 * so you needn't dwell on it
 *
 * Here we will use jsx & class component to create the same case with 01-learn-react/button-state-change
 */
class MyButton extends React.Component {
  constructor() {
    // as we know when we extend a class and we define a constructor, we should call super() first.
    super();
    this.state = {
      // Here we set the default state of the button to be "closed".
      openStatus: false,
    };
  }

  changeStatus() {
    // Here we use setState method to change the state.
    this.setState({
      openStatus: !this.state.openStatus,
    });
  }
  /**
   * render function can return only pure text or a virtual DOM.
   */
  render() {
    return (
      <div>
        <p className="jsx-status">
          {this.state.openStatus ? 'OpenStatus' : 'ClosedStatus'}
        </p>
        <button
          className="jsx-status-btn"
          onClick={this.changeStatus.bind(this)}
        >
          {this.state.openStatus ? 'Close' : 'Open'}
        </button>
      </div>
    );
  }
}

/**
 * Above example, we find that:
 *  1. we needn't set the key attribute when we render a list of JSX elements
 *     when we use React.createElement to combine a list of elements to a React element
 *     we must manually set the key attribute or it will throw a warning
 *  2. whatever React.createElement or JSX, we need to change the this point if we don't use arrow function
 *  3. we need to remember that the React Component isn't a react element but jsx will be compiled to a React element
 *     so we can't use the React Component as a React element exactly
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(MyButton));


/**
 * The react allow us to render different root elements in the same time
 * By the way, react component can directly be used at the JSX
 * like the following example:
 */

const jsxRootElement = (<><MyButton/></>);
const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(jsxRootElement);

/**
 * It can successfully to be rendered
 * and we use the empty tag to wrap the MyButton component
 * I'd remembered that I had told you the empty tag will be transformed to React.Fragment
 * You can't set the key attribute to the empty tag but React.Fragment can.
 * like the following example:
 */
// const emptyWrapperElement = (< key={2}><MyButton/></>); // it's wrong and will throw an error
const ReactFragmentElement = (<React.Fragment key={1}>
  <MyButton/>
</React.Fragment>);