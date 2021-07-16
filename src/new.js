import React from 'react'
import {Typography, AppBar, Card,Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core"
import {PhotoCamera} from '@material-ui/icons'
import {Camera} from '@material-ui/icons'
import Weather from './weather'

const New = () =>{
    return(
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                        <Camera />
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm" style={{marginTop:'50px'}}>
                        <Typography varient="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography>
                            <Typography varient="h5" align="center" color="textSecondary" paragraph>
                                Hello everyone, Are you new to Material UI? Have you heard about it but never actually tried it out? Maybe you dived into it but it felt overwhelming? It's easy to learn if you know where to start! This video will help you to get started quickly, welcome to a one-hour Material UI Crash Course.
                            </Typography>
                            <div>
                                <Grid container spacing={2} justify='center'>
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            See my Photos
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outline" color="primary">
                                            See my Action
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Typography>
                    </Container>
                </div>
            </main>
            <Weather />        
        </>
    )
}
export default New


