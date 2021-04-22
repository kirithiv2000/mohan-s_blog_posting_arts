import './App.css';
import {AppBar, makeStyles, Card, CardMedia, CardActions, Grow, Grid, CardContent, CardHeader, Avatar, Typography
,CircularProgress,
Button
} from "@material-ui/core"

const useStyles = makeStyles({
  root:{

  },appbar:{
    marginTop:10,
    borderRadius:100,
    // height:100
  },
  appbarInside:{
    display:'flex',
    // justifyContent:'center',
    alignItems:'center',
    padding:'5px',
    fontSize:25
  },img:{
    width:80,
    height:80,
    borderRadius:100,
    marginRight:10,
  },card:{
    margin:20,
  }
})
function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <AppBar  className={classes.appbar} position="static" color="white">
        <div className={classes.appbarInside}>
          <div>
            <img className={classes.img} src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/a5/3f/de.jpg" alt="Mogans portrait logo"/>
          </div>
            <div>
              Mogans Portratit
            </div>
        </div>
      </AppBar>
      <CircularProgress style={{color:"white"}} />
      <Grow in>
        <Grid container>
          <Grid item xs = {12}>
          <Grid container>
            <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={"https://media.tacdn.com/media/attractions-splice-spp-674x446/09/a5/3f/de.jpg"}/>
              </Avatar>
               }
               title="Shrimp and Chorizo Paella"
               subheader="September 14, 2016"
              >
              </CardHeader>
              <CardMedia>
                <img src={"https://media.tacdn.com/media/attractions-splice-spp-674x446/09/a5/3f/de.jpg"}/>
              </CardMedia>
              <CardContent>
                this is image drawn by mogan sdlfsjdfflkjssldkjflkjsdsfldkjlksdfdlkjsldkjf
              </CardContent>
              <CardActions>
                <Button size="large" color="secondary" style={{backgroundColor:"blue"}} fullWidth >
                  Like
                </Button>
              </CardActions>
            </Card>
            </Grid>
            
            </Grid>
          </Grid>

        </Grid>
      </Grow>
    </div>
  );
}

export default App;
