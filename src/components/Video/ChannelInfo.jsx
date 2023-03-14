import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../context/YoutubeApiContext';

export default function ChannelInfo({id}) {
    const { youtube } = useYoutubeApi();
    const { isLoading, error, data: channelInfo } = useQuery(
        ['channelInfo', id],
        () => youtube.channelInfo(id)
    );

    return (
        <div className='flex items-center'>
            {isLoading && <p className='text-2xl text-white'>Loading...</p>}
            {error && <p className='text-2xl text-white'>Error...</p>}

            {channelInfo && (
                <div className='flex my-5 items-center'>
                    <button type="button" id="userAvatarButton" className=" bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false">
                        <img className="w-10 h-10 rounded-full" src={channelInfo.thumbnails.default.url} alt={channelInfo.title}/>
                    </button>
                    <p className='font-medium text-lg text-white ml-4'>{channelInfo.title}</p>
                </div>
            )}
        </div>
    );
}

