/**
 * React is a library for building user interfaces.
 * React is not a framework like Vue or Angular.
 * React's render through ReactDOM that transform the virtual DOM to the real DOM.
 * In this file we will first experience the basic usage of React to create a button that can change the state.
 * We will use the functions called React.createElement() and ReactDOM.render() to create a button and tag "p" to show the state.
 */

/**
 * Here we will create a React.Component subclass called MyButton.
 * First we should know that the class's state will persist by property this.state.
 * And the state only can be changed by function this.setState().
 * Last We need to use the function render() to return the virtual DOM.
 *  In the render() function, we can use the React.createElement() to create the virtual DOM.
 *  Also we can use the JSX syntax to create the virtual DOM.
 *  Here we will use the React.createElement() to create the virtual DOM.
 * Let's start to create the class MyButton.
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

  /**
   * render function can return only pure text or a virtual DOM.
   */
  render() {
    /**
     * Here we will define two vm that button and p tag.
     * About createElement, it can receive three parameters,
     *  the first one is the tag name,
     *  the second one is the attributes options,
     *  the third one is the children, you can pass a string or a virtual DOM.
     *    when you want to pass two and more virtual DOM, you should pass them in an array.
     *    🌟It's important that child virtual DOM must define the unique key property.
     *    Because React will use the key to distinguish the virtual DOM.
     */
    const oButton = React.createElement(
        'button',
        {
          className: 'react-btn',
          key: 1,
          /**
           * React recommend us to bind the function in tag's property(the view).
           * Distinguish from the HTML that we may separate the function from the view
           */
          onClick: () =>
            this.setState({
              openStatus: !this.state.openStatus,
            }),
        },
        this.state.openStatus ? 'Close' : 'Open'
      ),
      oStatus = React.createElement(
        'p',
        {
          className: 'react-status',
          key: 2
        },
        this.state.openStatus ? 'OpenStatus' : 'CloseStatus'
      );
    /**
     * React define that the render function can only return one virtual DOM.
     * So we need a root tag to wrap the two virtual DOM.
     */
    const wrapper = React.createElement(
      'div',
      {
        className: 'react-wrapper',
      },
      [oStatus, oButton]
    );
    return wrapper;
  }
}

/**
 * Here we will use the ReactDOM.render() to render the virtual DOM to the real DOM.
 * The first parameter is the virtual DOM that we want to render.
 *  React.Component is not a virtual DOM, it's a class.
 *  We can transform the class to a virtual DOM by React.createElement().
 * The second parameter is the Real DOM that we want to render to.
 *  We can use the document.getElementById() to get the DOM.
 */

/**
 * news: ReactDOM.render is no longer supported in React 18. Use createRoot instead.
 */
// ReactDOM.render(React.createElement(MyButton), document.getElementById('root'));

/**
 * React 18: ReactDOM.createRoot
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(MyButton));

/**
 * Above are all content of this file.
 * Thanks for reading.
 * @author: Ryan
 * @blog: https://juejin.cn/user/149961513642024
 */