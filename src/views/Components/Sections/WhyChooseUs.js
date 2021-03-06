import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { fade } from '@material-ui/core/styles/colorManipulator';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import SectionPills from './SectionPills';
import SectionAboutUsPills from './SectionAboutUsPills';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '256px'
  },
  mediaLarge: {
    minHeight: '256px',
    height: '100%'
  },
  fullHeight: {
    height: '100%',
    width: '100%'
  },
  emptyCardContainer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
//   emptyCard: {
//     [theme.breakpoints.up('md')]: {
//       backgroundColor: fade(theme.palette.background.emphasis, 0.4),
//       height: 64,
//     }
//   },
  imagesColumn: {
    order: 12,
    [theme.breakpoints.up('md')]: {
      order: 0
    }
  }
}));

export default function Content(props) {
  const classes = useStyles();

  const content = {
    'header-p1': 'Why Choose Us',
    'header-p2': 'The best Way we deliver satisfies our client',
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.',
    // 'primary-action': 'Action',
    'image1': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    'image2': 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    'image3': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'image4': 'https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={5} className={classes.imagesColumn}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Box display="flex" height="100%">
                    <Card className={classes.fullHeight}>
                      <CardMedia className={classes.mediaLarge} image={content['image1']} />
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.emptyCardContainer}>
                      <Card className={classes.emptyCard}>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card>
                        <CardMedia className={classes.media} image={content['image2']} />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Card>
                        <CardMedia className={classes.media} image={content['image3']} />
                      </Card>
                    </Grid>
                    <Grid item xs={12} className={classes.emptyCardContainer}>
                      <Card className={classes.emptyCard}>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box display="flex" height="100%">
                    <Card className={classes.fullHeight}>
                      <CardMedia className={classes.mediaLarge} image={content['image4']} />
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box display="flex" height="100%">
                    <Card className={classes.fullHeight}>
                      <CardMedia className={classes.mediaLarge} image={content['image4']} />
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box display="flex" height="100%">
                    <Card className={classes.fullHeight}>
                      <CardMedia className={classes.mediaLarge} image={content['image2']} />
                    </Card>
                  </Box>
                </Grid>
                
              </Grid>
            </Grid>

            
            
            <Grid item xs={12} md={7}>
              <Box  height="100%">
                <Box >
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography color="primary" variant="h4" component="span">{content['header-p1']} </Typography>
                    <Typography variant="h4" component="span">{content['header-p2']}</Typography>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
                  <SectionAboutUsPills/>
                  {/* <Box mt={3}>
                    <Button variant="contained" color="secondary">{content['primary-action']}</Button>
                   
                  </Box> */}
                 
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}