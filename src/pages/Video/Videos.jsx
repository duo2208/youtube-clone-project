import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import VideoCard from '../../components/Video/VideoCard';
import { useYoutubeApi } from '../../context/YoutubeApiContext';

export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword],
        () => youtube.search(keyword)
    );

    return (
        <section className='p-4 sm:ml-64'>
            <p className='mb-5 text-2xl text-white'>
                {keyword ? `${keyword}` : 'Hot Trend'} Vidoes
            </p>

            {isLoading && <p className='text-2xl text-white'>Loading...</p>}
            {error && <p className='text-2xl text-white'>Error...</p>}
            {videos && (
                <ul>
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </ul>
            )}
        </section>
    );
}