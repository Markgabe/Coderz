/* eslint-disable no-plusplus */
import { Calculate } from '@styled-icons/material-outlined';
import { Text } from '@styled-icons/ionicons-solid';
import { ListUl } from '@styled-icons/bootstrap';

const categories = [
  {
    name: 'math',
    label: 'Matemática',
    color: '#EB4444',
    index: 1,
    icon: Calculate
  },
  {
    name: 'text',
    label: 'Textos',
    color: '#6783CC',
    index: 2,
    icon: Text
  },
  {
    name: 'list',
    label: 'Listas',
    color: '#57DD85',
    index: 3,
    icon: ListUl
  },
];

export function getByIndex(index) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].index === index) return categories[i];
  }
  return null;
}

export default categories;
