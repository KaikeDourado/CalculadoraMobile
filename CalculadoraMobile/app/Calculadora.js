import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./CalculadoraEstilo.js";
import {
    SomarDoisNum,
    SubtrairDoisNum,
    MultiplicarDoisNum,
    DividirDoisNum,
} from "./CalculadoraFuncoes.js";

const HomePage = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState("");

    const calcular = (operacao) => {
        try {
            const r = operacao(num1, num2);
            setResultado(r);
            setErro("");
        } catch (e) {
            setErro(e.message);
            setResultado(null);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.divInputs}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Número 1:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={num1}
                        onChangeText={setNum1}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Número 2:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={num2}
                        onChangeText={setNum2}
                    />
                </View>
            </View>
            
            <View style={styles.divButtons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => calcular(SomarDoisNum)}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => calcular(SubtrairDoisNum)}
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => calcular(MultiplicarDoisNum)}
                >
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => calcular(DividirDoisNum)}
                >
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>

            {erro ? <Text style={styles.error}>{erro}</Text> : null}

            {resultado !== null && (
                <Text style={styles.resultado}>Resultado: {resultado}</Text>
            )}
        </View>
    );
};

export default HomePage;