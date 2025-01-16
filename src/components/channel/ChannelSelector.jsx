import React from 'react'

function ChannelSelector({className,arialabel}) {
    return (
        <div>
            <select className={className} aria-label={arialabel}>
                <option value="1">우리FISA 1기</option>
                <option value="2">우리FISA 2기</option>
                <option value="3">우리FISA 3기</option>
                <option value="4">우리FISA 4기</option>
            </select>
        </div>
    )
}

export default ChannelSelector