const morpho = {
  комната: ['комнаты', 'комнат'],
};

function getFormIndex(amount) {
  amount %= 100;
  if (amount > 9 && amount < 21) {
    return 1;
  }
  amount %= 10;
  if (amount === 1) {
    return -1;
  }
  if (amount < 5) {
    return 0;
  }
  return 1;
}

export default function getWordForm(word, amount) {
  const index = getFormIndex(amount);
  if (index < 0) {
    return word;
  }
  return morpho[word] && morpho[word][index];
}
