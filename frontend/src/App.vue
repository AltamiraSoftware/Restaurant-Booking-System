<template>
  <div id="app">
    <header class="header">
      <div class="header-content">
        <h1>Restaurante</h1>
        <nav>
          <ul>
            <li><a href="#reservas">Reservas</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <Home />
    </main>
    <footer>
      <p>&copy; 2024 Restaurante. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: { Home }
}
</script>

<style>
:root {
  --primary-color: #B8860B;
  --secondary-color: #F4F4F4;
  --text-color: #333;
  --accent-color: #DAA520;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Playfair Display', serif;
  color: var(--text-color);
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

nav a:hover {
  color: var(--primary-color);
}

main {
  margin-top: 80px;
  flex: 1;
  padding: 2rem;
  background-color: var(--secondary-color);
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  nav ul {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>