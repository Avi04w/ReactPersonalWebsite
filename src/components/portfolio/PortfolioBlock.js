import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, description, source, website, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'10px'}>
         <Box component={'img'} src={image} alt={'mockup'} height={545}/>
         <h1 style={{fontSize: '2.5rem', marginTop: '10px'}}>{title}</h1>
         <p style={{fontSize: '1.2rem', margin: '15px', textAlign: 'justify', marginBottom: '0px'}}>{description}</p>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Github'} icon={'fa fa-code'}/>
            </Box>
            {website && (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={website} title={'Website'} icon={'fa fa-globe'}/>
               </Box>
            )}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;