import React from 'react';
import { render, getAllByText } from '@testing-library/react';
import App, {addValue, onHit}from './App';
import ReactDOM, {unmountComponentAtNode} from 'react-dom'


it('Renders without errors!', () => {
  // ARRANGE
  const div = document.createElement("div");

  // ACT
  ReactDOM.render(<App />, div);

  // CLEAN UP
  ReactDOM.unmountComponentAtNode(div);

  // ASSERTION - Rendered without exception
});

test('RTL Renders without Crashing', () => {
  render(<App />);
});


test('Function addValue is not busted!', () => {
  // ARRANGE
  const currentCount = 5;
  const expected = 6;

  // ACT
  const actual = addValue(currentCount);

  // ASSERT
  expect(actual).toBe(expected);
})

test('Funtion onHit is not busted!', ()=>{
  //ARRANGE
  const currentCountOne = 5;
  const currentCountTwo = 7;
  const expected = 0;

  //ACT
  const actual = onHit(currentCountOne, currentCountTwo);

  //ASSERT

  expect(actual).toBe(expected);
})

test('Top Display has no errors!', () => {
  // ARRANGE
  const { getAllByText } = render(<App />);

  // ACT
  getAllByText(/Strike/i);
  getAllByText(/inning/i);
  getAllByText(/Ball/i);
})