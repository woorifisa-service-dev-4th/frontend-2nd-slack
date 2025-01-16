import React from 'react'

function DirectMessage({className,icon,name}) {
    return (
        <div>
            <a href="https://example.com" className={className}>
                <i className={icon}></i>
                <span>{name}</span>
            </a>
        </div>
    )
}

export default DirectMessage