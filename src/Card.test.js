import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('The Cards Component', () => {
    it('Renders without Crashing',  () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card title="title test" content="content" />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Renders the UI as expected', () => {
        const tree = renderer.create(<Card title="title test" content="content" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});