import { React } from 'react';

import styled from 'styled-components';

export const ResultIcon = styled(({ svg, ...props }) => svg.render(props))`
  color: ${(props) => (props.active ? '#6699cc' : '#bdbdbd')};
  border-left: ${(props) => (props.active ? '3px solid #6699cc' : '')};
  box-sizing: border-box;
  
  width: 85px;
  height: 40px;
  margin: 10px auto;

  transition: all 0.3s;

  &:hover {
    color: #6699cc;
    transform: scale(1.05);
  }

  @media (max-width: 1000px) {
    border-left: none;
    padding-bottom: 20px;
    box-sizing: content-box;
    border-bottom: ${(props) => (props.active ? '3px solid #6699cc' : '')};
  }
`;
