import React from 'react';

export const UserActionDetail = ({ author, avatarUrl, timestamp }) => {
    return (
        <div className="user-info owner">
            <div className="user-action-time">
                asked <span title="2015-06-05 13:53:36Z" className="relativetime">{timestamp}</span>
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