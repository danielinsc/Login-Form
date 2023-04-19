 import logo from './assets/logo.svg';
 import "./global.css";

export function App() {
return <div className="container">
  <header className="header">
    <img src={logo} alt="Login Account"/>
    <span>Merci d'entrer vos informations de connexion </span>

  </header>
  <form>
<div className="inputContainer">
  <label htmlFor="email">E-mail</label>
  <input 
   type="text"
   name="email"
   id="email" 
   placeholder="enterprise@gmail.com"
   />
</div>
<div className="inputContainer">
  <label htmlFor="password">Password</label>
  <input 
   type="password"
   name="password"
   id="password" 
   placeholder="*********"
   />
</div>
  <a href="">Mot de passe oublie ?</a>
<button className="button"> 
Se connectar <img src="" alt="" />

</button>
<div className="footer">
  <p>Vous n'avez pas de compte ?</p>
  <a href="#">Créer un compte</a>
</div>
 </form>
 
 </div>

  
}


 