import { Toolbar, AppBar, Typography,makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    header:{
        background: 'black'
    }
})

const  NavBar = () => {
    const classes = useStyle();
    return(
   
            <AppBar className={classes.header} position="static">
                <Toolbar>

                <Typography component="h2" >Hello Mamun</Typography>
                <Typography component="h2"  >All User</Typography>
                <Typography component="h2"  >Add Usrer</Typography>

                </Toolbar>

            </AppBar> 
       

    );
}

export default NavBar;
