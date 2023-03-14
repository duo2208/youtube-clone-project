import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import VideoCard from '../../components/Video/VideoCard';
import { useYoutubeApi } from '../../context/YoutubeApiContext';

export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();
    const { isLoading, error, data: videos } = useQuery(
        ['videos', keyword],
        () => youtube.search(keyword), { staleTime: 1000 * 60 *  1 }
    );

    return (
        <section className='p-4 sm:ml-32'>
            {isLoading && <p className='text-2xl text-white'>Loading...</p>}
            {error && <p className='text-2xl text-white'>Error...</p>}

            {videos && (
                <ul className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gird-cols-5 gap-3 gap-y-4'>
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </ul>
            )}
        </section>
    );
}