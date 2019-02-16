import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('The Cards Component', () => {
    it('Renders without Crashing',  () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Renders the UI as expected', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});