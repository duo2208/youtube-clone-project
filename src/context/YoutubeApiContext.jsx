import React,{ createContext, useContext } from 'react';
import MockYoutube from '../service/mockYoutube';
import Youtube from '../service/youtube';

export const YoutubeApiContext = createContext();

// 자식 컴포넌트에 데이터를 전달해줄 수 있는 umbrella
export function YoutubeApiProvider({ children }) {
    // const youtube = new MockYoutube();
    const youtube = new Youtube();

    return <YoutubeApiContext.Provider value={{ youtube }}>
         { children }
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}
