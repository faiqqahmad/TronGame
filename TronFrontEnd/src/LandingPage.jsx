import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import '../css/LandingPage.css'
import { flexbox } from '@mui/system'



export default function LandingPage() {

    return <>
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
        <Box id="buttonList" sx= {{
            mb: '100px',
            display: 'flex',
            flexDirection: 'column'
            
        }}>
            
            <Button className="buttons" variant="contained" sx= {{

                marginRight: "10vw",
                mt: "10px",
                width: "200px",
                height: "100px"

            }}>TESTING</Button>
        
        
            <Button className="buttons" variant="contained" sx= {{

                marginRight: "10vw",
                mt: "10px"

            }}>TESTING</Button>
        
        
            <Button className="buttons" variant="contained" sx= {{

                marginRight: "10vw",
                mt: "10px"

            }}>TESTING</Button>
            
        </Box>
        
    </Box>
    
    </>
}