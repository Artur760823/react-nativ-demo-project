import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseInput from "./components/ExpenseInput";

export default function App() {
  const [expense, setExpense] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddExpenseHandler() {
    setModalIsVisible(true);
  }

  function stopAddExpenseHandler() {
    setModalIsVisible(false);
  }

  function addExpenseHandler(enteredExpenseText) {
    setExpense((currentExpenses) => [
      ...currentExpenses,
      { text: enteredExpenseText, id: Math.random().toString() },
    ]);
  }

  function deleteExpenseHandler(id) {
    setExpense((currentExpenses) => {
      return currentExpenses.filter((expense) => expense.id !== id);
    });
    stopAddExpenseHandler();
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>Shopping List</Text>
      <Button
        title="Add New Expense"
        color="#4863A0"
        onPress={startAddExpenseHandler}
      />
      <ExpenseInput onAddExpense={addExpenseHandler} visible={modalIsVisible} onCancel={stopAddExpenseHandler}/>
      <View style={styles.expenseContainer}>
        <FlatList
          data={expense}
          renderItem={(itemData) => {
            return (
              <ExpenseItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteExpense={deleteExpenseHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#b180f0',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  appTitle: {
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  expenseContainer: {
    flex: 5,
  },
});
