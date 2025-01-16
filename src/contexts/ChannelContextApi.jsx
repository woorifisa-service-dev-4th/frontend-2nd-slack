import React, { createContext, useContext, useReducer  } from 'react';

// Context 생성
const ChannelContext = createContext();

const initialState = [
    { name: '01_공지사항', icon: 'fas fa-hashtag' },
    { name: '02_사전학습', icon: 'fas fa-hashtag' },
    { name: '03_학습일지_챌린지', icon: 'fas fa-hashtag' },
    { name: '04_스터디_그룹', icon: 'fas fa-hashtag' },
    { name: '05_자유게시판', icon: 'fas fa-hashtag' },
    { name: 'c3_00_클라우드_서비스_개발_과정', icon: 'fas fa-lock' },
    { name: 'c3_01_강사_공지사항', icon: 'fas fa-lock' },
    { name: 'c3_02_강사_수업자료공유', icon: 'fas fa-lock' },
    { name: 'c3_03_자유게시판', icon: 'fas fa-lock' },
]

const reducer = ((state,action)=>{
    // switch(action.type){
        
    // }
})

// Provider 컴포넌트
export const ChannelProvider = ({ children }) => {
    
    {/**상태 관리할 값,함수들 모음 */}
    const [channelState, channelDispatch] = useReducer(reducer, initialState);


    // activeChannel을 변경하는 함수
    const addToolBar = (name,icon) => {
        channelDispatch({
            type: 'ADD_CHANNEL',
            name,
            icon
        });
    };

    return (
        <ChannelContext.Provider value={{ channels: channelState }}>
            {children}
        </ChannelContext.Provider>
    );
};

// Context 사용을 위한 커스텀 Hook
export const useChannelContext = () => {
    return useContext(ChannelContext);
};