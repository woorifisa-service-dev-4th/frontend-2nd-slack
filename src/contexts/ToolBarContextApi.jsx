import React, { createContext, useContext, useReducer  } from 'react';

// Context 생성
const ToolBarContext = createContext();

const initialState = [
    {
    href: 'https://woorifisa-service-dev-4th.github.io/frontend-1st-slack/src/main-page.html',
    iconClass: 'fas fa-home',
    label: '홈',
    },
    {
    href: 'https://woorifisa-service-dev-4th.github.io/frontend-1st-slack/src/main-page.html',
    iconClass: 'fas fa-comments',
    label: 'DM',
    },
    {
    href: 'https://woorifisa-service-dev-4th.github.io/frontend-1st-slack/src/main-page.html',
    iconClass: 'fas fa-bell',
    label: '내 활동',
    },
    {
    href: 'https://woorifisa-service-dev-4th.github.io/frontend-1st-slack/src/main-page.html',
    iconClass: 'fas fa-ellipsis-h',
    label: '더 보기',
    },
    {
    href: 'https://woorifisa-service-dev-4th.github.io/frontend-1st-slack/src/main-page.html',
    iconClass: 'fas fa-plus',
    label: '', // 플러스는 라벨이 없으므로 비워둠
    },
];

const reducer = ((state,action)=>{
    switch(action.type){
        case 'ADD_TOOLBAR':
            return state.map((item, index) =>
                index === action.index ? { ...item, label: action.label } : item
            );
    }
})

// Provider 컴포넌트
export const ToolBarProvider = ({ children }) => {
    
    {/**상태 관리할 값,함수들 모음 */}
    const [toolBarState, toolBarDispatch] = useReducer(reducer, initialState);


    // activeChannel을 변경하는 함수
    const addToolBar = (href,iconClass,label) => {
        toolBarDispatch({
            type: 'ADD_TOOLBAR',
            href,
            iconClass,
            label
        });
    };

    return (
        <ToolBarContext.Provider value={{ items: toolBarState }}>
            {children}
        </ToolBarContext.Provider>
    );
};

// Context 사용을 위한 커스텀 Hook
export const useToolBarContext = () => {
    return useContext(ToolBarContext);
};