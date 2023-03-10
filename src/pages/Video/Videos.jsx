import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import VideoCard from '../../components/Video/VideoCard'

export default function Videos() {
    const { keyword } = useParams();
    const {isLoading, error, data: videos} = useQuery(['videos', keyword], async() => {
        return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
            .then(res => res.json())
            .then(data => data.items)
    });

    return (
        <section className="p-4 sm:ml-64">
            <p className="text-2xl text-white">
                {keyword ? `${keyword}` : 'Hot Trend'} Vidoes
            </p>

            {isLoading && <p>Loading...</p>}
            {error && <p>Error...</p>}
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
