# Component

## Overview

React lets you define components as classes or functions.  Components defined as classes currently provide more features.  To define a React component class, you need to extend React.Component:

```javascript

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

```

Components are the fundamental unit of a React application. The only method you must define in a React application Component subclass is called render().  All the other methods are optional.

Each Component corresponds to an element in the DOM. The Component handles rendering the content of the element and for handling any events that occur within it. Components can be nested inside of other components. This is what it is meant by composing components and is a powerful technique for achieving reuse.

All React Components must act like pure functions with respect to their props. There are not a lot of rules but this one is clear. It says that for a given props object the output should always be the same. This allows React to optimize component rendering. If the props have not changed then a component does not need to be re-rendered since its output should be the same.

The preferred way to define a React component is using the function syntax we've seen so far, where a React component is a JavaScript function from a props object to a React element. 

## Component Lifecycle

<img src="https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png" />