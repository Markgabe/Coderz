/* eslint-disable no-plusplus */
import { Calculate } from '@styled-icons/material-outlined';
import { Text } from '@styled-icons/ionicons-solid';
import { ListUl } from '@styled-icons/bootstrap';
import { Book } from '@styled-icons/boxicons-regular';

const categories = [
  {
    name: 'initials',
    label: 'Aprenda',
    color: '#457FF0',
    index: 0,
    icon: Book,
    image: 'pexels-suzy-hazelwood-1226398.jpg'
  },
  {
    name: 'math',
    label: 'Matemática',
    color: '#EB4444',
    index: 1,
    icon: Calculate,
    image: 'pexels-jeshootscom-714699.jpg'
  },
  {
    name: 'text',
    label: 'Textos',
    color: '#6783CC',
    index: 2,
    icon: Text,
    image: 'pexels-pixabay-261763.jpg'
  },
  {
    name: 'list',
    label: 'Listas',
    color: '#57DD85',
    index: 3,
    icon: ListUl,
    image: 'pexels-suzy-hazelwood-1226398.jpg'
  },
];

export function getByIndex(index) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].index === index) return categories[i];
  }
  return null;
}

export function getByName(name) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].name === name) return categories[i];
  }
  return null;
}

export default categories;
