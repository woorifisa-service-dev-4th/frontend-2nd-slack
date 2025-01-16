import React from 'react';
import ChannelList from '../channel/ChannelList';
import DirectMessageList from '../directMessage/DirectMessageList';
import styles from '../../styles/Aside.module.css';
import ChannelSelector from './ChannelSelector';
import ChannelFilter from './ChannelFilter';
import ChannelEdit from './ChannelEdit';
import ChannelHudle from './ChannelHudle';
import { ChannelProvider } from '../../contexts/ChannelContextApi';

function ChannelBar() {
    return (
        <div className={styles.channelBar}>
            {/* 상단 선택 및 필터 영역 */}
            <div className={styles.upline}>
                    <ChannelSelector className={styles.select} arialabel={"FISA 기수 선택"} />
                <div className={styles.uplineRight}>
                    <ChannelFilter/>
                    <ChannelEdit/>
                </div>
            </div>

            <hr className={styles.divider} />

            {/* 허들 영역 */}
            <ChannelHudle className={styles.hurdle}/>

            {/* 채널 리스트 */}
            <ChannelProvider>
                <ChannelList />
            </ChannelProvider>

            {/* 다이렉트 메시지 리스트 */}
            <DirectMessageList />
        </div>
    );
}

export default ChannelBar;
