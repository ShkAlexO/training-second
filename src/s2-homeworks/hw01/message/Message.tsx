import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}
// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-message-' + props.message.id}
            className={`${s.message} defaultMessage`}
        >

            <div className={`${s.text} defaultMessageBox`}>
                <div className={`${s.messageBoxInner} defaultMessageBoxInner`}>
                    <div
                        id={'hw1-name-' + props.message.id}
                        className={`${s.name} defaultMessageName`}>
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <span
                        id={'hw1-text-' + props.message.id}
                        className={`${s.messageText} defaultMessageText`}>
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </span>
                </div>
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C0.5 3 2 3.5 14 11H0V7.25V5V3.5V0Z" fill="#0066CC"/>
                </svg>
            </div>

            <div className={`${s.imageAndTime} defaultMessageAvatarInner`}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    className={'defaultMessageAvatar'}
                    src={props.message.user.avatar}
                    //
                />

                <div
                    id={'hw1-time-' + props.message.id}
                    className={`${s.time} defaultMessageTime`}
                >
                    {/*создаёт студент*/}
                    {props.message.message.time}
                    {/**/}
                </div>
            </div>
        </div>
    )
}

export default Message
