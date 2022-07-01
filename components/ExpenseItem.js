import { StyleSheet, View, Text, Pressable } from "react-native";

function ExpenseItem(props) {
  return (
    <View style={styles.expenseList}>
      <Pressable
        android_ripple={{ color: "#5e0acc" }} // for andriod
        onPress={props.onDeleteExpense.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem } //for IOS
      >
        <Text style={styles.expenseItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseList: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#4863A0",
  },
  pressedItem: {
    opacity: 0.5
  },
  expenseItem: {
    color: "white",
    padding: 8,
  },
});
