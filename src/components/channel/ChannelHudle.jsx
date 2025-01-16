import React from 'react'

function ChannelHudle({className}) {
    return (
        <div>
            <a className={className} href="https://example.com">
                <i className="fas fa-headphones"></i>
                <span>허들</span>
            </a>
        </div>
    )
}

export default ChannelHudle