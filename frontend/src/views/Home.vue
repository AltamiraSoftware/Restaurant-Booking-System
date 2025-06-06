<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenido a nuestro Restaurante</h1>
        <p>Una experiencia gastronómica única</p>
      </div>
    </section>

    <section class="reservation-section" id="reservas">
      <div class="container">
        <h2>Reserva tu mesa</h2>
        <div class="reservation-container">
          <div class="reservation-form-container">
            <ReservaForm ref="reservaForm" />
          </div>
          <div class="reservation-info">
            <h3>Horario</h3>
            <p>Lunes a Domingo</p>
            <p>13:00 - 16:00</p>
            <p>20:00 - 23:30</p>
            <ReservasLista />
          </div>
        </div>
      </div>
    </section>

    <section class="menu-section" id="menu">
      <div class="container">
        <MenuCarta />
      </div>
    </section>
  </div>
</template>

<script>
import ReservaForm from '../components/ReservaForm.vue';
import ReservasLista from '../components/ReservasLista.vue';
import MenuCarta from '../components/MenuCarta.vue';

export default {
  name: 'Home',
  components: {
    ReservaForm,
    ReservasLista,
    MenuCarta
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4');
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin: -2rem -2rem 2rem -2rem;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.reservation-section {
  padding: 4rem 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.menu-section {
  padding: 4rem 0;
  margin-top: 2rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.reservation-section h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.reservation-container {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  align-items: start;
}

.reservation-form-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.reservation-info {
  background-color: var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  position: sticky;
  top: 100px;
}

.reservation-info h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.reservation-info p {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .reservation-container {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }

  .reservation-info {
    position: static;
  }
}
</style>