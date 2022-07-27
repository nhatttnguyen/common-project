import React from 'react';
import { Helmet } from 'react-helmet-async';
import StyledHomePage from './styles';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <StyledHomePage>
        <h1>Common Project File </h1>
      </StyledHomePage>
    </>
  );
}
