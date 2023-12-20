/**
 * When we rerender the React Element, React doesn't replace the DOM node directly.
 * Instead, React creates a new version of the DOM node and then compares the new and old version.
 * Means that React will create a virtual DOM tree when we render the React Element.
 *
 * The path of rerender is:
 * - construct virtual DOM tree <-> Each React Element
 * - create new virtual DOM tree -> compare new and old virtual DOM tree
 * - create patches -> apply patches to real DOM (render to real DOM)
 */

/**
 * Here we use a simple example to show React's rerender effect:
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  const element = (
    <div>
      <p>Date Now is: {new Date().toTimeString()}</p>
    </div>
  );
  root.render(element);
};

setInterval(render, 1000);

/**
 * Through the chrome devtool's elements tab we can see that the DOM update only happens in the p tag's textContent.
 * Means that React only updates the textContent of the p tag.
 */

/**
 * We can use another example to show React's rerender effect:
 *  we can create a button to change the same content of the p tag
 *  if it's use the normal DOM, the button will cause the whole DOM tree to rerender by innerHTML
 *  but React will not rerender the p tag because it's not changed between the old and new virtual DOM tree
 */
const update = () => {
  let content = 'Before Value';
  const MyComponent = () => (
    <div>
      <p id="content">{content}</p>
      <button
        onClick={() => {
          document.getElementById('content').innerHTML = 'Before Value';
        }}
      >
        Change Content Directly
      </button>
      <button
        onClick={() => {
          document.getElementById('content').textContent = 'After Value';
        }}
      >
        Change Content textContent
      </button>
      <button
        onClick={() => {
          content = 'Before Value';
          root.render(<MyComponent />);
        }}
      >
        UnChange Content
      </button>
      <button
        onClick={() => {
          content = 'After Value';
          root.render(<MyComponent />);
        }}
      >
        Change Content
      </button>
    </div>
  );
  root.render(<MyComponent />);
};

update();

/**
 * Above example we can find that react will compare the old and new virtual DOM tree
 * and decide whether to rerender the real DOM.
 */

/**
 * And when we move one div to another place, React will reuse the DOM node instead of replace it.
 * As we known that Node.prototype.appendChild() will move the child node which is already in the DOM tree to the new place.
 * React will use this characteristic to reuse the DOM node.
 * 
 * But sometime React will not reuse the DOM node for more efficient.
 */