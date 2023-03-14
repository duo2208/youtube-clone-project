import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import VideoCard from './VideoCard';

export default function RelatedVideos({id}) {
    const { youtube } = useYoutubeApi();
    const { isLoading, error, data: relatedVideos } = useQuery(
        ['relatedVideos', id],
        () => youtube.relatedVideos(id), { staleTime: 1000 * 60 *  5 }
    );

    return (
        <>
            {isLoading && <p className='text-2xl text-white'>Loading...</p>}
            {error && <p className='text-2xl text-white'>Error...</p>}

            {relatedVideos && (
                <ul>
                    {relatedVideos.map((video) => (
                        <VideoCard key={video.id} video={video} type='list'/>
                    ))}
                </ul>
            )}
        </>
    );
}

