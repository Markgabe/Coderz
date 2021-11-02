import React from 'react';

import { Link } from 'react-router-dom';
import { ResultIcon } from './styles';

function Icon({ svg, active, to }) {
  return (
    <Link to={to} style={{ margin: 'auto' }}>
      <ResultIcon svg={svg} active={active} />
    </Link>
  );
}

export default Icon;
