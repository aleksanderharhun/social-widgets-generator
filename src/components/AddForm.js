import React from 'react';
import {v4 as uuidv4} from 'uuid';
import ImageSvgBackground from './ImageSvgBackground';
import { SketchPicker } from 'react-color';



function AddForm(props){
    return(
        <form className="AddForm" action="">
            
            <div className="AddFormLink">
                <p>Dodaj link</p>
                <input type="text" placeholder="https://example.com"/>
            </div>
            <div className="AddFormIcons">               
                <p>Wybierz ikonę</p>
                {
                    //props.icons.map((svgData,index)=>
                    <ImageSvgBackground 
                    // onClick={props.onIconClick} 
                    // svgColor={props.currentColor.replace("#","")} 
                    // svg={svgData.svg} 
                    />
                    //)
                }
                <SketchPicker
                    // color={props.currentColor }
                    // onChange={props.onColorChange}
                />
            </div>
            <div className="AddFormText">
                <p>Wprowadź tekst</p>
                <input type="text" 
                    // placeholder="Facebook" 
                    // onChange={props.onChange}
                    // value={props.data.vidgetText}
                />
            </div>
            <div>
            <p>&nbsp;</p>
                <input type="submit" value="dodaj koleną"/>
            </div>

        </form>
    )
}

export default AddForm;