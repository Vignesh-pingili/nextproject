"use client";

import { Box, Button, Card, Typography } from '@mui/material'
import React, { useState } from 'react'

function WebsiteContent() {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Box sx={{display:"flex"}}>
            <Card sx={{m:1}}>
<img src='crypto-market-making.jpg' style={{ height:"340px"}}/>
            </Card>
            <Card sx={{m:1}}>
<img src='BTCUSD_2024-09-26_10-35-27-2048x1206.png' style={{ height:"340px"}}/>

            </Card>
        </Box>
        <Box>
            <Card sx={{m:2}}>
                <Typography sx={{opacity:0.7,color:"#000000"}} p={1}>Step into the future of finance with cryptocurrency, where digital assets like Bitcoin and Ethereum empower you to manage wealth directly, securely, and privately. Using blockchain technology, crypto makes global transactions fast, transparent, and accessible. Unlock new financial freedom today!</Typography>
              {open?<></>: <Button sx={{m:1,alignItems:"flex-end"}} onClick={()=>setOpen(!open)} variant='contained'>Read more</Button>}
              {open ? <Box>
                <Typography p={"0 0 15px 45px"}><Typography sx={{color:"#ff6600"}}>Global Accessibility:</Typography> Cryptocurrency opens the door to financial services for millions who are underserved by traditional banking systems. With just a smartphone, anyone can send, receive, and store digital assets, unlocking a world of financial opportunity.</Typography>
              <Typography p={"0 0 15px 45px"}><Typography sx={{color:"#ff6600"}}>Financial Empowerment:</Typography>Cryptocurrencies allow individuals to take full control of their funds. Transactions are direct, peer-to-peer, and do not require permission from centralized authorities, making them fast and cost-effective, regardless of borders.</Typography>
              <Typography p={"0 0 15px 45px"}><Typography sx={{color:"#ff6600"}}>Investment Potential: </Typography>Digital currencies are among the most exciting asset classes today, with growth potential that has already captivated millions of investors. Whether you’re looking to diversify your portfolio or explore innovative financial products like DeFi (decentralized finance), crypto offers new paths for wealth generation.</Typography>
              <Typography p={"0 0 15px 45px"}><Typography sx={{color:"#ff6600"}}>Enhanced Privacy & Security:</Typography>Blockchain technology secures transactions through cryptography, making it nearly impossible to alter records. Users have enhanced privacy, as transactions don’t require personal information, reducing the risk of identity theft and fraud.</Typography>
              <Button sx={{m:1}} variant='contained' onClick={()=>setOpen(!open)}>Close/Read less</Button>
              </Box> : <></>}
            </Card>
        </Box>
    </div>
  )
}

export default WebsiteContent