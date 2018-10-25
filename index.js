'use strict';
let { useState } = require('react');

function useInputValue(initialValue) {
  let [value, setValue] = useState(initialValue);

  function onChange(event) {
    setValue(event.currentTarget.value);
  }

  return {
    value,
    onChange,
  };
}

module.exports = useInputValue;
