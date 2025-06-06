<template>
  <div class="reservas-lista">
    <h3>Reservas Existentes</h3>
    <div class="table-container" v-if="reservas.length">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Personas</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reserva in reservas" :key="reserva._id">
            <td>{{ formatDate(reserva.fecha) }}</td>
            <td>{{ reserva.hora }}</td>
            <td>{{ reserva.numeroPersonas }}</td>
            <td><span :class="['estado', reserva.estado]">{{ reserva.estado }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="no-reservas">
      No hay reservas disponibles.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservas: []
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:3000/api/reservas');
      this.reservas = await response.json();
    } catch (error) {
      console.error('Error al cargar reservas:', error);
    }
  }
}
</script>

<style scoped>
.reservas-lista {
  margin-top: 2rem;
}

.reservas-lista h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: var(--primary-color);
  color: white;
  font-weight: 500;
}

tr:hover {
  background-color: #f5f5f5;
}

.estado {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.estado.confirmada {
  background-color: #4CAF50;
  color: white;
}

.estado.pendiente {
  background-color: #FFC107;
  color: black;
}

.estado.cancelada {
  background-color: #f44336;
  color: white;
}

.no-reservas {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  color: #666;
}

@media (max-width: 768px) {
  th, td {
    padding: 0.5rem;
  }
  
  .estado {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
  }
}
</style>
