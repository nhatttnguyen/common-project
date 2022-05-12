import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Icon from 'app/components/Icon';

export function SubPage() {
  return (
    <>
      <Helmet>
        <title>SubPage</title>
        <meta name="description" content="A Boilerplate application SubPage" />
      </Helmet>
      <h1>
        <Icon type="icon-home"></Icon>My SubPage
      </h1>
    </>
  );
}
