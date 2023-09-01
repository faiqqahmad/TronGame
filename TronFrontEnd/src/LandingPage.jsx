import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import '../css/LandingPage.css'
import { flexbox, fontSize } from '@mui/system'
import { cyan } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01FFFF',
    },
    secondary: {
      main: '#01FFFF',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});




const c = cyan[500]

export default function LandingPage() {

    return <>
    <ThemeProvider theme={theme}>
        <Box sx={{ 
            backgroundColor: 'black',
            backgroundImage: 'url(../assets/landingPageBackgroundImage.jpg)',
            width: '100%',
            height: '100%',
            display: "flex",
            justifyContent: "right",
            alignItems: "flex-end",
            minHeight:"100vh",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }} >
            <Box sx={{
                width: "70vw",
                height: "100vh"
            }}>
                <Typography sx={{
                    color: "white",
                    fontSize: "120px",
                    fontStyle: "italic",
                    margin: "50px"
                }}>TRON</Typography>
            </Box>
            <Box id="buttonList" sx= {{
                mb: '100px',
                display: 'flex',
                flexDirection: 'column'
                
            }}>
                
                <Button className="buttons" variant="outlined" sx= {{

                    marginRight: "10vw",
                    mt: "10px",
                    width: "400px",
                    height: "100px",
                    fontSize: "50px",
                    fontStyle: "italic",
                    border: "5px solid",
                    backgroundColor: "black"

                }}>PLAY</Button>
            
            
                <Button className="buttons" variant="outlined" sx= {{

                    marginRight: "10vw",
                    mt: "10px",
                    width: "400px",
                    height: "100px",
                    fontSize: "50px",
                    fontStyle: "italic",
                    border: "5px solid",
                    backgroundColor: "black"

                }}>SIGNUP</Button>
            
            
                <Button className="buttons" variant="outlined" sx= {{

                    marginRight: "10vw",
                    mt: "10px",
                    width: "400px",
                    height: "100px",
                    fontSize: "50px",
                    fontStyle: "italic",
                    border: "5px solid",
                    backgroundColor: "black"

                }}>LOGIN</Button>
                
            </Box>
            
        </Box>
    </ThemeProvider>
    </>
}