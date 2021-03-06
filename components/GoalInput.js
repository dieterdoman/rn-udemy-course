import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course goal" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal} />
            <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default GoalInput;