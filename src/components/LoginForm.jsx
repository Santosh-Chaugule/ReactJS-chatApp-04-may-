import { useState } from "react";
import axios from "axios";


const projectID = "73e5a7cb-a925-4479-9f7d-2433251994c9"

const LoginForm = () => {


    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');;
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'project-ID': projectID, 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.loacation.reload();
            setError('');
        } catch (err) {
            setError('Ooops,incorrect credentials')
        }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align='center'>
                        <button className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>

        </div>
    )

}

export default LoginForm