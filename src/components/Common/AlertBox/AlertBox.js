import React, { Component } from 'react';


export const AlertBox = ({ type, title, messages }) => {
    let iconClassName = null;
    let divClassName = null;

    switch (type) {
        case 'success':
            iconClassName = "icon-ok";
            divClassName = "success";
            break;
        case 'error':
            iconClassName = "icon-flag";
            divClassName = "error";
            break;
    }


    return (
        <div className={`alert-message ${divClassName}`} style={{"margin": "0 auto"}}>
            <i className={iconClassName}></i>
            <p><span>{title}</span></p>
            <div style={{ "marginLeft": "57px" }}>
                {
                    messages.map((message) => {
                        return (<p>{message}</p>);
                    })
                }
            </div>

        </div>)


}