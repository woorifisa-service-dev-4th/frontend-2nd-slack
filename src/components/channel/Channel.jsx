import React from 'react'

function Channel({ channelItem, icon, name}) {
    return (
        <div>
            <a href="https://example.com" className={channelItem}>
                <i className={icon}></i>
                <span>{name}</span>
            </a>
        </div>
    )
}

export default Channel