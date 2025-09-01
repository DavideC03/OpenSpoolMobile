const Dropdown = jest.fn().mockImplementation(({ onChangeText, data, value, placeholder, ...props }) => {
  const React = require('react');
  const { View, Text, TouchableOpacity } = require('react-native');

  return React.createElement(View, { testID: 'dropdown-container' },
    React.createElement(TouchableOpacity, {
      testID: 'dropdown-button',
      onPress: () => {
        // Simulate selecting the first item
        if (data && data.length > 0 && props.onChange) {
          props.onChange(data[0]);
        }
      },
    },
      React.createElement(Text, { testID: 'dropdown-text' }, value || placeholder || 'Select...')
    )
  );
});

export { Dropdown };
export default { Dropdown };
