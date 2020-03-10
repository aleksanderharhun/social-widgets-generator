import React from 'react';

function ImageSvgBackground(props){
    let addColor = props.svg.svg.replace('<svg',`<svg fill="%23${props.svgColor}"`)
    return(
        <img className="AddFormIcon" onClick={props.onClick} src={'data:image/svg+xml;utf8,'+addColor} alt={props.svg.name} />
    )
}

export default ImageSvgBackground;