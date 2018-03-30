import React, {Component} from 'react';
import $ from 'jquery';

export default class Intro extends Component {
    toggle(target){
        const accordion = $('.accordion');
        let index = 0;

        for(let i=0; i < accordion.length; i++){
            if(accordion[i] === target){
                index = i;
            }
        }

        if(accordion[index] !== target) return;

        console.log(accordion[index]);
        $(target).toggleClass('open');
    }

    render(){
        return(
            <div className="intro" onClick={({target})=>{this.toggle(target)}}>
                <div className="accordion" id="panel1">Let`s</div>
                <div className="accordion" id="panel2">Make</div>
                <div className="accordion" id="panel3">This</div>
                <div className="accordion" id="panel4">World</div>
                <div className="accordion" id="panel5">Better</div>
            </div>
        )
    }
}
