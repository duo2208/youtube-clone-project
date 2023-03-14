import React from 'react';
import { useLocation } from 'react-router-dom';
import { formatAgo } from '../../util/date';

import ChannelInfo from '../../components/Video/ChannelInfo';
import RelatedVideos from '../../components/Video/RelatedVideos';

export default function VideoDetail() {
    const { state: {video} } = useLocation()
    const { title, channelId, channelTitle, publishedAt, description } = video.snippet;

    return (
        <section className='px-2 sm:px-4 flex flex-col lg:flex-row'>
            <article className='basis-4/6'>
                <iframe
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    height="640"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    title={title}
                    >
                </iframe>

                <div className='mt-3'>
                    <h2 className="font-semibold text-2xl text-white">{title}</h2>
                    <ChannelInfo id={channelId} name={channelTitle}/>
                    <div className="px-3 py-3 mb-7 bg-zinc-600 bg-opacity-25 rounded-md">
                        <p className='text-zinc-100 opacity-80'>조회수 ####회</p>
                        <p className='text-zinc-100 opacity-80'>{formatAgo(publishedAt)}</p>
                        <pre className='whitespace-pre-wrap line-clamp-1 text-zinc-200 opacity-80'>{description}</pre>
                    </div>
                </div>
            </article>

            <section className="basis-2/6">
                <RelatedVideos id={video.id} />
            </section>
        </section>
    );
}
