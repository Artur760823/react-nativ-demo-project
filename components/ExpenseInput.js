import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function ExpenseInput(props) {
  const [enteredExpenseText, setEnteredExpenseText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredExpenseText(enteredText);
  }

  function addExpenseHandler() {
    props.onAddExpense(enteredExpenseText);
    setEnteredExpenseText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/shop.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your next expense"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color={"#728FCE"}
              title="Add Expense"
              onPress={addExpenseHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ExpenseInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "85%",
    marginRight: 8,
    marginBottom: 18,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: " 35%",
    marginHorizontal: 10,
  },
  image:{
    width: '60%',
    margin:2
  }
});
