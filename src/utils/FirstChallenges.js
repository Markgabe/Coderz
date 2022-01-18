/* eslint-disable no-plusplus */
const FirstChallenges = [
  {
    id: 3000,
    name: 'Hello World',
    description: 'Você consegue fazer um programa para imprimir "Hello World"?',
    level: 1,
    gainedXP: 200,
    category: 'initials',
    regex: /^window\.alert\('Hello World'\).*/gm
  },
];

export function getByIndex(index) {
  for (let i = 0; i < FirstChallenges.length; i++) {
    if (FirstChallenges[i].id === parseInt(index, 10)) return FirstChallenges[i];
  }
  return null;
}

export default FirstChallenges;
