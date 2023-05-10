import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Checkbox = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={handleCheckboxChange}
    >
      <Text style={styles.checkboxLabel}>{label}</Text>
      {checked && <Text style={styles.checkboxCheckmark}>✓</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  checkboxCheckmark: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Checkbox;
