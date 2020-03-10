import React from 'react';
import './App.css';
import IconPicker from './components/IconPicker';
import Preview from './components/Preview';
import {ICONS} from './components/ICONS';

class GenerateWidgetsApp extends React.Component {
  constructor(){
    super();
    this.state = {
      addForm: {
        vidgetText: "",
        vidgetLink: "",
        vidgetIconIndex: 1 //index o current icon
      },
      icons: ICONS,
      currentColor: "#fff"
    }    

    this.onChange = this.onChange.bind(this);
    this.onIconChange = this.onIconChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  onChange(e){
    console.log(e.target.value);
    this.setState({
      addForm: {
        vidgetText: e.target.value,
        vidgetIconIndex: 1 
      }
    })
  }

  onIconChange(e){
    console.log(e.target);
  }

  copyToClipboard(e){
    const el = document.createElement('textarea');
    el.value = e.target.src;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  
  onColorChange(color,event){
    this.setState({
      currentColor: color.hex
    })
  }



  render(){
    return (
      <div className="App">
        <IconPicker
          icons={this.state.icons} 
          onIconClick={this.copyToClipboard}
          currentColor={this.state.currentColor}
          onColorChange={this.onColorChange}
        />
      </div>
    );
  }
}

export default GenerateWidgetsApp;
