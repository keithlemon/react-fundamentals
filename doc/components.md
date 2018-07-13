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

Each Component represents an elemenet in the DOM.  The 