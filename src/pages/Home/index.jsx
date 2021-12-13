import React from 'react';

import { CardArea } from './styles';

import BaseScreen from '../../components/BaseScreen';
import Card from '../../components/Card';
import NextChallenge from '../../components/NextChallenge';

export default function Home() {
  return (
    <BaseScreen activePage='home'>
      <CardArea>
        <Card>
          <NextChallenge
            challenge={{
              id: 1,
              name: 'Soma de dois números',
              category: 'math',
              level: 1,
            }}
          />
        </Card>
        <Card />
        <Card />
        <Card />
      </CardArea>
    </BaseScreen>
  );
}
