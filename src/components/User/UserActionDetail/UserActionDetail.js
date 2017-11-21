import React from 'react';
import { formatTimestampToDate, hashCode } from 'utils/Utils'

export const UserActionDetail = ({ author, timestamp }) => {
    const sex = hashCode(author) % 2 ? 'female' : 'male';
    const avatarUrl = `https://avatars.dicebear.com/v1/${sex}/${author}/80.png`
    const dateFormatted = formatTimestampToDate(timestamp);
    return (
        <div className="user-info owner">
            <div className="user-action-time">
                asked <span title={timestamp} className="relativetime">{dateFormatted}</span>
            </div>
            <div style={{ "display": "flex" }}>
                <div>
                    <a href="/"><img src={avatarUrl} alt="" width="32" height="32" /></a>
                </div>
                <div className="user-details">
                    <a href="/">{author}</a>
                </div>
            </div>
        </div>
    )
}