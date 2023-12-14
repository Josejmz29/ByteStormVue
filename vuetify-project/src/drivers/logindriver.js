import { getUsuarioApi } from '@/api/usuarioapi';


const express = require('express');
const jwt = require('jsonwebtoken');



const secretKey = 'tuClaveSecreta'; // Cambia esto en producción

// Endpoint para login
app.post('/login', (req, res) => {
  // Aquí verificarías las credenciales del usuario
  const { username, password } = req.body;

  const usuario = getUsuarioApi(username);
  
  if(username !=usuario.user) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }

  const user = { username: username};

  // Generar el token JWT
  const token = jwt.sign(user, secretKey, { expiresIn: '15m' });

  res.header('Authorization', token).json({ 
    mensaje: 'Autenticación correcta',
    token: token
  });
  res.json({ token });
});

// Ruta protegida que requiere un token válido
app.get('/rutaProtegida', verificarToken, (req, res) => {
  res.json({ mensaje: 'Esta es una ruta protegida' });
});

function verificarToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(403).json({ mensaje: 'Acceso denegado' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ mensaje: 'Token no válido' });

    req.user = user;
    next();
  });
}

