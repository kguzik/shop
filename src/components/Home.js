import React from 'react';
import Typography from '@material-ui/core/Typography';

function Home(props) {
  return (
    <>
      <section className="home-page">
        <Typography variant="h1" className="home-page__title">{props.title}</Typography>
        <a href="/products" className="home-page__link">{props.linkText}</a>
      </section>
    </>
  );
}

export default Home;
