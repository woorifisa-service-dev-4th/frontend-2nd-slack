import { Children, createContext, useContext, useReducer } from "react";

// 채팅 데이터를 제공하는 컨텍스트
export const ChatContext = createContext();
export const ChatDispatchContext = createContext();


const dummyChats = [
    {
        id: 1,
        user: '서비스_유승한',
        time: '오후 4:14',
        message: '부러질지언정 꺾이지 않겠습니다.',
    },
    {
        id: 2,
        user: '서비스_신희원',
        time: '오후 4:14',
        message: '바람이 불지 않으면 노를 저어라.',
    },
    {
        id: 3,
        user: '서비스_여은동',
        time: '오후 4:14',
        message: 'Good is better than Perfect.',
    },
];

export const ChatProvider = ({children}) => {
    const [chats, dispatch] = useReducer(reducer, dummyChats);

    return (
        <ChatContext.Provider value={chats}>
            <ChatDispatchContext.Provider value={dispatch}>
                { children }
            </ChatDispatchContext.Provider>
        </ChatContext.Provider>
  
    )
}

export const useChats = () => useContext(ChatContext);
export const useChatsDispatch = () => useContext(ChatDispatchContext);

const reducer = (chats, action) => {
    const data = chats;
    switch(action.type) {
        case 'ADD' :
            const {newChat} = action;
            return [...data, newChat];
        default:
            return chats; // 기본적으로 상태를 그대로 반환
    }
}
