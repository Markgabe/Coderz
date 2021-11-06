import React from 'react';

import { Home } from '@styled-icons/fluentui-system-regular';
import { Sword } from '@styled-icons/remix-line';
import { Trophy } from '@styled-icons/ionicons-outline';
import { Gear } from '@styled-icons/evil';
import { User } from '@styled-icons/fa-regular';
import { ChevronDoubleRight } from '@styled-icons/heroicons-outline';

import { Container, Logo, Separator, IconGroup, ExpandButton } from './styles';
import Icon from '../Icon';

export default function SideNavbar() {
  return (
    <Container>
      <Logo>C</Logo>
      <Separator />
      <IconGroup>
        <Icon active svg={Home} />
        <Icon svg={Sword} />
        <Icon svg={Trophy} />
        <Icon svg={Gear} />
        <Icon svg={User} />
      </IconGroup>
      <ExpandButton>
        <Icon svg={ChevronDoubleRight} />
      </ExpandButton>
    </Container>
  );
}
