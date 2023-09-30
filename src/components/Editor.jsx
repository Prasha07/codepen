import { useState } from "react";

import { Box,styled} from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
// codemirror controlled part importkr rhe taki pehchan ske html css aur js k codes ko
import {Controlled as ControlledEditor } from 'react-codemirror2';
import CodeMirror from "codemirror";
import '../App.css';
// styling for codemirror
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'; 

const Container = styled(Box)`
   flex-grow : 1 ;
   flex-basic: 0 ;
   display :flex;
   flex-direction : column;
   padding : 0 8px 8px;
`
const Heading=styled(Box)`
   background: #1d1e22;
   display: flex;
   padding: 9px 12px;

`;
const Header =styled(Box)`
    display: flex;
    background: #060606;
     color: #AAAEBC;
     ${'' /* space between jitne bhi child hnge sbk beech equal space dal deta hai */}
     justify-content: space-between;
     font-weight: 700;
`;

// heading,icon,color is used as prop here (array destructruing);
const Editor =({heading,icon,color,value,onChange,language}) => {
  // to manage that icon of expand ,true tlb suru me open rhega 
  const [open,setOpen] =useState(true);
  // isme 3 argument pass hote hai
  const handleChange = (editor,data,value) => {
    onChange (value);
  }

    return (
        // by default box div ki trh hi kam krta hai
        <Container style ={open ? null: {flexGrow:0}}>
          <Header>
               <Heading>
                  <Box component="span"
                  style={{
                  background:color,
                  height: 20,
                  width: 20,
                //   display inline tha to height width nhi le rha tha
                  display: 'flex',
                  placeContent: 'center',
                  borderRadius: 5,
                  marginRight: 5,
                  paddingBottom: 2,
                  // black color for icon present in each block
                  color:"#000"
                  }}>
                      {icon}
                  </Box>
                  {heading}
               </Heading>
               <CloseFullscreenIcon
              //  true ko false aur false ko true kr dnge expand icon me
                onClick = {() => setOpen(prevState => !prevState )}
                fontSize="small"
                style={{alignSelf: 'center'}}
               />
          </Header>
          <ControlledEditor
            className="controlled-editor"
            value={value}
            onBeforeChange={handleChange}
            options={{
              theme: 'material',
              lineNumbers: true,
              lineWrapping: true,
              mode:language
            }}
            // linenumbers to specify line number hum jo likhenge 
            // theme simply theme k liye h
           // ab bhi hum type krnge to kuch type hi nhi hga kyuki ccodemirror ko controlled component ki trh import kiye h to  onchange pe kya hga wo specify krna pdega
          //  Controlled Component - jaise form tag  h aur usme liye uinput = text to agr uski vaur react se control  kr rhe using usestate
          // so value tag is used for controlled components onchange event
          // so values store krna pdega globally hume to usk liye context bnana pdega
          />
        </Container>
    )
}
export default Editor;