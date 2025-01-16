import { createContext, useContext, useReducer } from "react";

export const ProfileTabContext = createContext();
export const ProfileTabDispatchContext = createContext();

export const ProfileProvider = ({children}) => {
    const [profileTabInfo, profileTabDispatch] = useReducer(reducer, { user: null, open: false });

    return (
        <ProfileTabContext.Provider value={profileTabInfo}>
            <ProfileTabDispatchContext.Provider value={profileTabDispatch}>
                { children }
            </ProfileTabDispatchContext.Provider>
        </ProfileTabContext.Provider>
  
    )
}

export const useProfileTabInfo = () => useContext(ProfileTabContext);
export const useProifleTabDispatch = () => useContext(ProfileTabDispatchContext);

const reducer = (state, action) => {
    switch (action.type) {
        case 'OPEN':
            return { user: action.user, open: true }; // 프로필 탭 열기
        case 'CLOSE':
            return { user: null, open: false }; // 프로필 탭 닫기
        default:
            return state;
    }
    
}