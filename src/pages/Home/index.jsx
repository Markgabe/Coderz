import React from 'react';

import { CardArea } from './styles';

import BaseScreen from '../../components/BaseScreen';
import Card from '../../components/Card';

export default function Home() {
  return (
    <BaseScreen activePage='home'>
      <CardArea>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardArea>
    </BaseScreen>
  );
}
