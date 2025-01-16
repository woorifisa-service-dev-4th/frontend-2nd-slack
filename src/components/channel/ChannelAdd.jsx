import React from 'react'

function ChannelAdd({className}) {
    return (
        <div>
            <a href="https://example.com" className={className}>
                <i className="fas fa-plus"></i>
                <span>채널 추가</span>
            </a>
        </div>
    )
}

export default ChannelAdd