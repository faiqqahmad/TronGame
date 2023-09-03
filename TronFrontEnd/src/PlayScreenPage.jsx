import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

export default function PlayScreenPage() {
    return <>
    
    <Box sx={{
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    }}>
        <Box className="navbar" sx={{
            backgroundColor: "gray",
            height: "150px",
            width: "100%",
            display: "flex",
            justifyContent: "left",
            alightItems: "center"

        }}>
            <Typography sx={{

            color: "white",
            fontSize: "60px",
            margin: "30px",
            fontStyle: "italic",


            }}>TRON</Typography>
        </Box>
        <Box className="playScreen" sx={{

            backgroundColor: "purple",
            height: "560px",
            width: "1152px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
        }}>


        </Box>
    </Box>
    
    </>
}