/**
 * JSX will be complied to a React element
 * Same as React.createElement's return value
 * We can compare the difference between JSX and React.createElement by the following example:
 */
const jsxElement = <h1 className="jsx-title">This is a JSX h1 element</h1>;
const reactElement = React.createElement(
  'h1',
  {
    className: 'react-title',
  },
  'This is a react h1 element'
);

console.log({
  jsxElement,
  reactElement,
});

/**
 * through the above example, we can find that:
 *  JSX and the return value of React.createElement are the same structure
 *  both have an attribute that called $$typeof and it's value is Symbol(react.element)
 *  as we known that the Symbol is a unique value
 *  so we can't register the same Symbol(react.element) to another variable
 */

/**
 * JSX accept the interpolation expression with a pair of curly braces (not double curly braces)
 * it can be a variable, a function (be called), a calculation expression, a JSX element, etc.
 * like the following example:
 */
const elementName = 'React';
const element = <h1>Hello, {elementName}</h1>;

/**
 * Also we can render a list of JSX elements
 * It's a expression, so we need use it in the curly braces
 * like the following example:
 */
const studentList = [
  {
    id: 1,
    name: 'Jack',
    age: 18,
  },
  {
    id: 2,
    name: 'Tom',
    age: 19,
  },
  {
    id: 3,
    name: 'Mary',
    age: 20,
  },
];

const studentListElement= (
  <ul>
    {studentList.map((student) => (
      <li key={student.id}>
        <span>{student.name}</span>
        <span>{student.age}</span>
      </li>
    ))}
  </ul>
);

/**
 * Above example, we use the map method to render a list of JSX elements
 * but we need to add a key attribute to each sub element
 */