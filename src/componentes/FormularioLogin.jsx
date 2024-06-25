import React, { useState } from 'react';
import '../estilos/Formulario.css';

export function FormularioLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const url = isLogin ? 'http://localhost:5000/api/users/login' : 'http://localhost:5000/api/users/register';
        const method = 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password }) // Incluir username en la solicitud
            });

            const data = await response.json();

            if (response.status !== 200 && response.status !== 201) {
                setError(data.msg);
            } else {
                console.log(data.msg);
                onLogin();
            }
        } catch (err) {
            console.error(err);
            setError('Server error');
        }
    };

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>{isLogin ? 'Iniciar sesión' : 'Crear cuenta'}</h2>
                {error && <p className="error">{error}</p>}
                {!isLogin && (
                    <div className="input-field">
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div className="input-field">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-field">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isLogin ? 'Iniciar sesión' : 'Registrarse'}</button>
                <p>
                    {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
                    <span onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
                        {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
                    </span>
                </p>
            </form>
        </div>
    );
}
