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

//Create The Element
funComponent({
    name: 'test-test2',
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

sampleElement.setState({ hello: 'goodbye' });
