import React from 'react'
import ProjectSection from "./ProjectSection.js"
import { Card, Grid, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    width: '100%',
    paddingTop: '50.25%', // 16:9
  },
  cardMedia: {
    width: '100%',
    paddingTop: '50%', // 16:9
  },
  divider: {
    background: theme.palette.primary.main,
    width: "70%"
  },
  content: {
    flex: '1 0 auto',
  },
  portfolioCards: {
    margin: 16,
    textAlign: 'start',
    width: theme.spacing(46),
    height: theme.spacing(46),
  },
  divider: {
    background: theme.palette.primary.main,
    width: "70%"
  },
}))

const HackathonsContainer = ({ data }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Box mt={7}>
        <Paper style={{backgroundColor: "#3f4443"}} flat square>
          <Box mt={5} pt={10} mb={6} display="flex" justifyContent="center">
            <Typography variant="h1" id="hackathons">
              Hackathons
            </Typography>
          </Box>
          {data.hackathons.map(project => {
            return <div>
              <Box display="flex" justifyContent="center">
                <Divider className={classes.divider} />
              </Box>
              <ProjectSection project={project} />
            </div>
          })}       
        </Paper>
      </Box>
    </Container>
  )
}

export default HackathonsContainer
