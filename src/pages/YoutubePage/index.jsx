import React from 'react';

import { Container } from './styles';

import BaseScreen from '../../components/BaseScreen';

export default function YoutubePage() {
  return (
    <BaseScreen activePage='home'>
      <Container>
        <iframe
          style={{ overflow: 'hidden', height: '100%', width: '100%' }}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='YouTube video player'
          src='https://www.youtube.com/embed/1P_bXCL2BsU'
        />
      </Container>
    </BaseScreen>
  );
}
