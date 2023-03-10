import React from 'react';

export default function VideoCard({video}) {
    return (
        <p className='text-white'>
            { video.snippet.title }
        </p>
    );
}

