import React from 'react';
import {v4 as uuidv4} from 'uuid';
import ImageSvgBackground from './ImageSvgBackground';
import { SketchPicker } from 'react-color';

function IconPicker(props){
    return(
            <div className="IconPickerIcons">       
                <ol>
                    <li>Wybierz kolor</li>
                    <li>Skopiuj ikonę</li>
                    <li>Użyj jako &lt;img src="<strong>wartość</strong>' ... &gt;</li>
                </ol>        
                {props.icons.map((svgData,index)=>
                    <ImageSvgBackground onClick={props.onIconClick} svgColor={props.currentColor.replace("#","")} svg={svgData} />
                    
                )}
                <SketchPicker
                    color={props.currentColor }
                    onChange={props.onColorChange}
                />
            </div>
    )
}

export default IconPicker;