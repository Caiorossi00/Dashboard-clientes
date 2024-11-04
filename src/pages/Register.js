import React, { useState } from 'react';
import '../assets/styles/Register.css'; // Estilo específico para o registro

const Register = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log('ID de Usuário:', userId);
    console.log('Senha:', password);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Registrar</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ID de Usuário"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className="register-input" 
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input" 
          />
          <input
            type="password"
            placeholder="Confirme a Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="register-input" 
          />
          <button type="submit" className="register-button">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
