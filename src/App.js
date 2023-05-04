import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

export default function App() {

    // if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <div className='App'>

            <ChatEngine
                height="100vh"
                projectID="
                              73e5a7cb-a925-4479-9f7d-2433251994c9"
                userName="santosh"
                userSecret="qwerty"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3'.play())}
            />

        </div>
    )
}
