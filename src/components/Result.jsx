
import { useContext ,useState,useEffect} from 'react';

import {Box,styled} from '@mui/material';

import { DataContext } from '../context/DataProvider';


const Container =styled(Box)`
   height:41vh;
`
const Result = () => {

   const [src,setSrc] = useState ('');
 
    const {html,css,js} =useContext(DataContext);
    // hume utput me html css aur js ko combine kra h ki
    // wo html document k form me aa jaye kyuki html doc me css aur js ko link kr skte using <style> and <script> tags</script></style>

    const srcCode =`
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
    `
//agr koi piece of code h jisko run krna h jb kuch dom me insert ho rha h to useefeect use krte h
// agr koi part update ho rha aur pura update hne pehi run krna h too useeffect use krte h
// jaise ki html me jb editor me likh rhe to hum chah rhe pura likhne k ekak sec bad update ho output me ,so use useeffect
    useEffect(() =>{
        // settimeout code k execution ko rok deta for givrn time
        // useeffect me jo bhi rhega usko return krna hga to variable me store kiye h timeout
       const timeout =  setTimeout(() =>{
          setSrc(srcCode);
        },1000)
        // 1000 ms =1second;
        // yani ek sec tk execution nhi hga jo hum changes kr rhe htm css aur js me
        return () => clearTimeout(timeout);
        // unwant condition me clear timeout nhi chlega 
    },[html,css,js])
    // html ,css ya js kuch bhi change hga ye useeffect chlega
    return (
       <Container>
       {/* now we need to display this srccode, we can do it via iframe */}
          <iframe
            srcDoc={src}
            title = "Output"
            // sandbox use krna pdega kyuki by default js ko allow nhi krta ifrsame
            sandbox='allow-scripts'
            frameBorder={0}
            width="100%"
            height="100%"
          />

       </Container>
    )
}

export default Result;