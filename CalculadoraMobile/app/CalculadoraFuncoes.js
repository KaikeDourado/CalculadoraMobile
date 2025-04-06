export const SomarDoisNum = (num1, num2) => {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Por favor, insira números válidos");
  }
  return n1 + n2;
};

export const SubtrairDoisNum = (num1, num2) => {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Por favor, insira números válidos");
  }
  return n1 - n2;
};

export const MultiplicarDoisNum = (num1, num2) => {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Por favor, insira números válidos");
  }
  return n1 * n2;
};

export const DividirDoisNum = (num1, num2) => {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Por favor, insira números válidos");
  }
  if (n2 === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return n1 / n2;
};
