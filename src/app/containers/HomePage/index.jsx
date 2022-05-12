import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Icon from 'app/components/Icon';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <h1>
        <Icon type="icon-home"></Icon>My HomePage
      </h1>
      <div>
        <Link to="/subpage">
          <button>SubPage</button>
        </Link>
      </div>
    </>
  );
}
