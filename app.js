import React from 'react';
import ReactDOM from 'react-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Heading = () => <h1>Hello Woerld form react compoennt!</h1>;

const HeadingCompoent = () => {
    return (
        <div id="parent">
            <Heading/>
            <div id="child">This is child</div>
        </div>)
}

root.render(<HeadingCompoent />);