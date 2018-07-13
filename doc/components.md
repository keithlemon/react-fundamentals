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

Components are the fundemental unit of a React application. The only method you must define in a React.Component subclass is called render().  All the other methods are optional.

Each Component corresponds to an element in the DOM.  The Component is responsible for rendering the content of the element and for handling any events that occur within it.  Components can be nested inside of other components.  This is what it is meant by composing components and is a powerful technique for achieving reuse. 