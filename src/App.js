import React from 'react';
import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <div className="App">
     <form>
     <input id="input-1" type="text" placeholder="¿Cuál es tu nombre completo?" required autofocus />
  <label for="input-1">
    <span class="label-text">Nombre</span>
    <span class="nav-dot"></span>
    <div class="signup-button-trigger">Sign Up</div>
  </label>
  <input id="input-2" type="text" placeholder="¿Cuál es tu apellido?" required />
  <label for="input-2">
    <span class="label-text">Apellido</span>
    <span class="nav-dot"></span>
  </label>
  <input id="input-3" type="email" placeholder="¿Cuál es tu edad?" required />
  <label for="input-3">
    <span class="label-text">Email</span>
    <span class="nav-dot"></span>
  </label>
  <input id="input-4" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
  <label for="input-4">
    <span class="label-text">Password</span>
    <span class="nav-dot"></span>
  </label>
  <input id="input-5" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
  <label for="input-5">
    <span class="label-text">Confirm Password</span>
    <span class="nav-dot"></span>
  </label>
  <button type="submit">Create Your Account</button>
  <p class="tip">Press Tab</p>
  <div class="signup-button">Registrarme</div>
     </form>
    </div>
  );
}

export default App;
