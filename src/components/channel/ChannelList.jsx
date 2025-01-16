import React from 'react';
import styles from '../../styles/Aside.module.css';
import Channel from '../channel/Channel';
import ChannelAdd from './ChannelAdd';
import { useChannelContext } from '../../contexts/ChannelContextApi';

function ChannelList() {
    const {channels} = useChannelContext();

    return (
        <div className={styles.channel}>
            <div className={styles.channelTitle}>
                <i className="fas fa-angle-down"></i>
                <button className={styles.channelButton}>채널</button>
            </div>
            <div className={styles.channelList}>
                {channels.map((channel, index) => (
                    <Channel key={index} channelItem = {styles.channelItem} icon = {channel.icon} name = {channel.name}/>
                ))}
                <ChannelAdd className={styles.addChannel}/>

            </div>
        </div>
    );
}

export default ChannelList;
