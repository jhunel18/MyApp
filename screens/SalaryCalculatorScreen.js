import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function SalaryCalculatorScreen() {
  const [rate, setRate] = useState("");
  const [hrs, setHrs] = useState("");
  const [deductions, setDeductions] = useState("");
 
  const grossPay = Number(rate || 0) * Number(hrs || 0)
  const netPay = grossPay - Number(deductions || 0);


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="RATE"
        value={rate}
        onChangeText={setRate}
        keyboardType="numeric"
        style={styles.input}
      />


      <TextInput
        placeholder="Hours"
        value={hrs}
        onChangeText={setHrs}
        keyboardType="numeric"
        style={styles.input}
      />


       <TextInput
        placeholder="Deductions"
        value={deductions}
        onChangeText={setDeductions}
        keyboardType="numeric"
        style={styles.input}
      />


      <Text style={styles.result}>
        Gross Pay: {grossPay}
      </Text>
      <Text style={styles.result}>
        Net Pay: {netPay}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "cyan"
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});
