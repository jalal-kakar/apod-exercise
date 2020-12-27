import React from 'react';
import './content.scss'

const Content = (data) => {
let content = <p></p>
console.log('DATA inside Content: ', data)

if(data.value) {
        content = <div className='content-container'>
            <p className='content-title'>{data.value.title}</p>
            <div className='content-image'>
                <img alt='space' src={data.value.hdurl}/>
            </div>

            <p className='content-copyright'>{data.value.copyright}</p>
            <p className='content-explanation'>{data.value.explanation}</p>
        </div>
}

    return content
};

export default Content;