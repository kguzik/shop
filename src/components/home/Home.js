import React from 'react';
import Typography from '@material-ui/core/Typography';
import Category from './Category';
import Grid from '@material-ui/core/Grid';

function Home(props) {
  return (
    <>
      <section className="home-page">
        <Typography variant="h1" className="home-page__title">{props.title}</Typography>
        <Typography variant="h2" className="subtitle">{props.subtitle}</Typography>
      </section>
      <section> 
        <Grid container className="categories">
          <Category title="Jackets" link="products/jackets" linkName="See jackets" categoryClassName="categories__item--jackets"/>
          <Category title="Coats" link="products/coats" linkName="See coats" categoryClassName="categories__item--coats"/>
        </Grid>
      </section>
    </>
  );
}


export default Home;
