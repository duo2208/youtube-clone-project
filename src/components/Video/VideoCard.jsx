import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../../util/date';

export default function VideoCard({video, type}) {
    const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
    const id = video.id;
    const navigate = useNavigate();
    const isList = type === 'list';  // list라고 외부에서 전달을 했으면

    return (
        <li
            className={isList ? "flex gap-1 ml-4 mr-2 mb-2" : ""}
            onClick={()=> {navigate(`/videos/watch/${id}`, {state: {video: video}})}}
        >
            <img className={isList ? "w-60 rounded-md mr-2" : "w-full rounded-md"} src={thumbnails.medium.url} alt={title}/>
            <div className="whitespace-pre-wrap">
                <p className="line-clamp-2 font-semibold text-white mb-2">{title}</p>
                <p className='text-zinc-200 text-sm opacity-80'>{channelTitle}</p>
                <p className='text-zinc-200 text-sm opacity-80'>{formatAgo(publishedAt)}</p>
            </div>
        </li>
    );
}

