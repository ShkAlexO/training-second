import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={`${s.friendMessage} defaultMessage`}
        >
            <div className={`${s.friendImageAndTime} defaultMessageAvatarInner`}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    className={'defaultMessageAvatar'}
                    src={props.message.user.avatar}
                    //
                />

                <div
                    id={'hw1-friend-time-' + props.message.id}
                    className={`${s.friendTime} defaultMessageTime`}
                >
                    {/*создаёт студент*/}
                    {props.message.message.time}
                    {/**/}
                </div>
            </div>

            <div className={`${s.friendText} defaultMessageBox`}>
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0C13.5 3 12 3.5 0 11H14V7.25V5V3.5V0Z" fill="#F5F7FB"/>
                </svg>

                <div className={`${s.messageBoxInner} defaultMessageBoxInner`}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={`${s.friendName} defaultMessageName`}
                    >
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <span
                        id={'hw1-friend-text-' + props.message.id}
                        className={`${s.friendMessageText} defaultMessageText`}
                    >
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FriendMessage
