/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Book } from '@styled-icons/boxicons-regular';
import { ArrowUpRightSquare } from '@styled-icons/bootstrap';
import { HardwareChip } from '@styled-icons/ionicons-outline';

import {
  Container,
  Title,
  Description,
  CategoryCard,
  CategoryLabel,
  CategoryIcon,
} from './styles';

import BaseScreen from '../../components/BaseScreen';

import Categories from '../../utils/Categories';

export default function HomePage() {
  return (
    <BaseScreen activePage='home'>
      <Container>
        <Title>Bem vindo ao Coderz!</Title>
        <Description>
          Um projeto para a conclusão do curso de Ciência da Computação da UFF.
          <br />
          <br />
          No Coderz, você pode:
          <br /> - Aprender a utilizar linguagens de programação
          <br /> - Visualizar seus códigos em Javascript Competir com seus
          amigos
          <br /> - E muito mais!
          <br />
          <br />
          Para começar, escolha uma das opções abaixo.
          <br />
          <br />
        </Description>
        <CategoryCard key='1' color='#457FF0' selected={false}>
          <div>
            <CategoryLabel>Sou iniciante</CategoryLabel>
            <div>
              <Description>Nunca mexi com programação</Description>
            </div>
          </div>
          <CategoryIcon svg={Book} />
        </CategoryCard>
        <CategoryCard key='2' color='#57DD85' selected={false}>
          <div>
            <CategoryLabel>Já sei algo</CategoryLabel>
            <div>
              <Description>Mas me mostra a plataforma!</Description>
            </div>
          </div>
          <CategoryIcon svg={ArrowUpRightSquare} />
        </CategoryCard>
        <Link to='/challenge' style={{ textDecoration: 'none' }}>
          <CategoryCard key='3' color='#EB4343' selected={false}>
            <div>
              <CategoryLabel>Já conheço aqui</CategoryLabel>
              <div>
                <Description>Vamos pular uns passos, né?!</Description>
              </div>
            </div>
            <CategoryIcon svg={HardwareChip} />
          </CategoryCard>
        </Link>
      </Container>
    </BaseScreen>
  );
}
