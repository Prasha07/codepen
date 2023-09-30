// usecontext kr rhe taki html css aur js ka value jo createcontext me (dataProvider) me tha uska use kr ske

import { useContext } from "react";
import Editor from "./Editor";
import {Box,styled} from '@mui/material';

import { DataContext } from "../context/DataProvider";

const Container =styled(Box)`
    display : flex;
    background-color : #060606;
    height : 50vh;
`
const Code =() =>{
    const {html,setHtml,css,setCss,js,setJs} =useContext(DataContext);

    return(
        // Box yani div k andr wrap kr k display flex kr dnge to b ek k bad ek aa jayega ek hi row me 
        // box (div) me style kr k usko Container nam de diye h
        <Container>
        {/*props are use here  */}
            <Editor
             language="xml"
                heading = "HTML"
                icon = "/"
                color="#FF3C41"
                value={html}
                onChange={setHtml}
                
                // phle html value thi phr change hone pe sethtml kr dnge yani jo type kre edotor pe wo dikhega ab
            />
            <Editor
             language="css"
                heading = "CSS"
                icon = "*"
                color="#0EBEFF"
                value={css}
                onChange={setCss}
                
            />
            <Editor
             language="javascript"
                heading = "JavaScript"
                icon = "()"
                color="#FCD000"
                value={js}
                onChange={setJs}
                
            />
        </Container>
    )
}
export default Code;