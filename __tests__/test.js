'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useInputValue = require('../src');

function render(val) {
  return ReactTestRenderer.create(val);
}

test('it should render component with useInputValue hook', t => {
  function Component() {
    let name = useInputValue('Jamie');
    return h('input', name);
  }

  let input = render(h(Component));

  t.is(input.toJSON().props.value, 'Jamie');
  input.toJSON().props.onChange({ currentTarget: { value: 'Kyle' } });
  t.is(input.toJSON().props.value, 'Kyle');
});
