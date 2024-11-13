import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Card, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open,setOpen,data}:any) {
  const [error, setError] = React.useState("")

let Data =  data?.filter((ele:any) => ele.market_cap_rank == open)

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    if(open == 1){
      setError("Not Available,This is first one record")
    }else{
let Data =  data?.filter((ele:any) => ele.market_cap_rank == open - 1);
setOpen(open - 1)
setError("")
    }
  }

  const handleNext = () => {
    if(open == 10){
      setError("Not Available,This is Last record")
    }
    else{
      let Data = data?.filter((ele:any) => ele.market_cap_rank == open +1)
      setOpen(open + 1)
      setError("")
    }
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box p={2} sx={{display:"flex"}}>
            <Box sx={{p:2}} >
                <img src={Data[0]?.image} style={{width:"140px",height:"160px"}}/>
                <Typography sx={{fontSize:"26px",pl:2}} >{Data[0]?.name}</Typography>
                <Box sx={{display:"flex"}}>
                    <Typography sx={{color:"#000",opacity:0.6}}>Current Price :</Typography>
                    <Typography sx={{color:"#1dd153"}}>{Data[0]?.current_price}</Typography>
                </Box>
            </Box>
            <Box >
                <Box sx={{display:"flex"}}>
                <Typography>market cap rank :</Typography>
                <Typography sx={{pl:2}}>{Data[0]?.market_cap_rank}</Typography>
                </Box>
                <Box display="flex">
                  <Typography>Low price in 24h : </Typography>
                  <Typography paddingLeft={2} color='red'>{Data[0]?.low_24h}</Typography>
                </Box>
                  <Box display="flex">
                  <Typography>High price in 24h : </Typography>
                  <Typography paddingLeft={2} color='green'>{Data[0]?.high_24h}</Typography>
                </Box>
             
                <Box display="flex">
<Typography minWidth="158px">price change in 24h :</Typography>
<Typography paddingLeft={0.4} >{Data[0]?.price_change_24h}</Typography>
                </Box>
                <Box sx={{display:"flex"}}>
                    <Typography>Total Supply :</Typography>
                    <Typography paddingLeft={4}>{Data[0]?.total_supply}</Typography>
                </Box>
                <Box display="flex">
                    <Typography>last updated :</Typography>
                    <Typography paddingLeft={4}>{Data[0]?.last_updated.slice(0,10)}</Typography>

                </Box>
                  <Box display="flex">
                    <Typography>Symbol :</Typography>
                    <Typography paddingLeft={6}>{Data[0]?.symbol}</Typography>

                </Box>
            </Box>
        </Box>
      
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:2,pb:1}}>
          <Button variant='contained' onClick={handlePrev}><ArrowBackIcon></ArrowBackIcon></Button>
          <Button variant='contained' onClick={handleNext}><ArrowForwardIcon/></Button>
        </Box>
        {error && <Typography sx={{color:'red',m:'auto',pb:1}}>{error}</Typography>}
      </Dialog>
    </React.Fragment>
  );
}
