const { creatElement } = React;
const { render } = ReactDOM;

const title = React.createElement(
    'h1',
    {id: 'title', class: 'header'},
    'Hello World'
)

ReactDOM.render(
    title,
    document.getElementById('react-container')
)