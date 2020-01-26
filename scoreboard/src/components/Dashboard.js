import React from 'react';
import {addValue, onHit} from '../App';



 export default function Dashboard (props){


    return(
        <div className = 'dash-container'>
            <section className = 'buttons'>
                <div className = 'home-buttons'>
                    <button className = 'strike' onClick ={()=> props.setStrikes(addValue(props.strikes))} >Strike</button>
                    <button className = 'ball'onClick ={()=> props.setBalls(addValue(props.balls))}>Ball</button>
                    <button className = 'foul'onClick={()=>{
                        props.setStrikes(addValue(props.strikes));
                        if(props.strikes > 2){
                            props.setStrikes(2);
                        }
                    }}>Foul</button>
                    <button className = 'hit'onClick ={()=> onHit(props.setBalls, props.setStrikes)}>Hit</button>
                </div>
            </section>
        </div>
    )

    

}

export {}
