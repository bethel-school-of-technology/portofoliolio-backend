import React from 'react';

import Devon from '../pages/../Devon';
import First from '../First';


function HomePage(props){
    return (
        <div>
        <Devon title={props.title} subTitle={props.subTitle} text={props.text} />
        <First  />
    </div>
    );
}

export default HomePage;