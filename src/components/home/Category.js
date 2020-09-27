import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Category(props) {
  return (
    <>
      <Grid className={`categories__item ${ props.categoryClassName }`} xs={12} md={5} item={true}>
        <Typography variant="h3" className="home-page__title">{props.title}</Typography>
        <a href={props.link} className="link">{props.linkName}</a>
      </Grid>
    </>
  )
}

export default Category;