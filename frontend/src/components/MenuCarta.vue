<template>
  <div class="menu-carta">
    <h2 class="menu-title">Nuestra Carta</h2>
    
    <section class="menu-section">
      <h3>Entrantes</h3>
      <div class="menu-items">
        <div class="menu-item">
          <h4>Tostones Rellenos</h4>
          <p>Plátano verde frito relleno de ropa vieja y aguacate</p>
          <span class="price">8.50€</span>
        </div>
        <div class="menu-item">
          <h4>Croquetas de Malanga</h4>
          <p>Con salsa de mojo cubano</p>
          <span class="price">7.50€</span>
        </div>
        <div class="menu-item">
          <h4>Empanadas Caribeñas</h4>
          <p>Rellenas de langosta y maíz</p>
          <span class="price">9.50€</span>
        </div>
      </div>
    </section>

    <section class="menu-section">
      <h3>Platos Principales</h3>
      <div class="menu-items">
        <div class="menu-item">
          <h4>Ropa Vieja Moderna</h4>
          <p>Ternera deshilachada al estilo cubano con chips de yuca</p>
          <span class="price">16.50€</span>
        </div>
        <div class="menu-item">
          <h4>Pescado a la Veracruzana-Cubana</h4>
          <p>Corvina en salsa criolla con plátanos maduros</p>
          <span class="price">19.50€</span>
        </div>
        <div class="menu-item">
          <h4>Lechón Asado Caribeño</h4>
          <p>Con mojo criollo y arroz congri</p>
          <span class="price">18.50€</span>
        </div>
      </div>
    </section>

    <section class="menu-section">
      <h3>Postres</h3>
      <div class="menu-items">
        <div class="menu-item">
          <h4>Flan de Coco</h4>
          <p>Con salsa de ron añejo</p>
          <span class="price">6.50€</span>
        </div>
        <div class="menu-item">
          <h4>Tres Leches Tropical</h4>
          <p>Con frutas caramelizadas</p>
          <span class="price">7.50€</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MenuCarta'
}
</script>

<style scoped>
.menu-carta {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.menu-title {
  text-align: center;
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
}

.menu-section {
  margin-bottom: 3rem;
}

.menu-section h3 {
  color: var(--accent-color);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.menu-item {
  position: relative;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.menu-item h4 {
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.menu-item p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.price {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-weight: bold;
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .menu-carta {
    padding: 1rem;
  }

  .menu-items {
    grid-template-columns: 1fr;
  }
}
</style>
