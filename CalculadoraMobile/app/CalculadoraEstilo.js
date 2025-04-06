import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  inputContainer: {
    width: "45%",
    margin: 15,

  },
  divInputs: {
    flexDirection: "row",
  },
  divButtons: {
    flexDirection: "row",
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 8,
    margin: 15,
    width: 60,
    height: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resultado: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#2e7d32",
  },
  error: {
    marginTop: 10,
    fontSize: 16,
    color: "#d32f2f",
    fontStyle: "italic",
  },
});

export default styles;