# funComponent (Functional Web Components)

A Library that enables you to create components using functions and create hooks to work with those components.

CDN Link: http://www.alexmercedcoder.com/funcomp.js (11kb)

CDN Link (ES 6 MODULE VERSION): http://www.alexmercedcoder.com/funcompmodule.js (13 kb)

CDN Link (Node MODULE.Exports VERSION): http://www.alexmercedcoder.com/funcompnpm.js (14 kb)

## Creating a Component

```
//Create The Element
funComponent({
    name: 'test-test',
    render: (state, props) => `<h1>${state.hello} ${props.user}</h1>`,
    connected: (element) => console.log(element),
    state: { hello: 'Hello' },
    hookGen: (element) => () => console.log(element),
    construct: (element) => console.log('hello'),
    disconnected: (element) => console.log('goodbye')
});

// storing the element in a variable
const sampleElement = document.querySelector('[user="joe"]');

//Getting a hook and using it
myFunc = sampleElement.hookGen();
myFunc();

//changing the components state
sampleElement.setState({hello: 'goodbye'})

//Removing the element from the dom to trigger the 'disconnected' function
sampleElement.parentNode.removeChild(sampleElement);

//changing the components state
sampleElement.setState({hello: 'goodbye'})

```

Using the Component in your HTML

```
<test-test user="joe"></test-test>
```

Properties that can be passed into the config object when creating components with the funComponent(config) function.

-   name: string that will be the name of the component, must be in kebab case (name-name)

-   render: a function that takes in state and props and returns a template string

-   state: The Initial state of the component, can be changed on the instance using the setState method passing the new state as an argument.

-   connected: a function that takes the instance as an argument that is run when the component is mounted

-   disconnected: a function that takes the instance as an argument that is run when the component is removed from dom

-   construct: a function that takes the instance as an argument that is called in the constructor, can be used to add actions to the constructor.

-   hookGen: a function that takes the instance as an argument that is meant to define addtional function/methods and return them when the hookGen method is called on the instance.
