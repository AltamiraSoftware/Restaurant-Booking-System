<template>
  <div class="reserva-form">
    <h2>Formulario de Reserva</h2>
    <form @submit.prevent="submitReserva" class="form-grid">
      <div class="form-group">
        <label for="fecha">Fecha</label>
        <input 
          type="date" 
          id="fecha"
          v-model="reserva.fecha" 
          required 
          class="form-control"
          :min="minDate"
        />
      </div>

      <div class="form-group">
        <label for="hora">Hora</label>
        <select 
          id="hora"
          v-model="reserva.hora" 
          required 
          class="form-control"
        >
          <option value="">Seleccione una hora</option>
          <optgroup label="Comidas">
            <option v-for="hora in horasComida" :key="hora" :value="hora">{{hora}}</option>
          </optgroup>
          <optgroup label="Cenas">
            <option v-for="hora in horasCena" :key="hora" :value="hora">{{hora}}</option>
          </optgroup>
        </select>
      </div>

      <div class="form-group">
        <label for="numeroPersonas">Número de Personas</label>
        <input 
          type="number" 
          id="numeroPersonas"
          v-model.number="reserva.numeroPersonas" 
          min="1" 
          max="8"
          required 
          class="form-control"
        />
        <small class="help-text" v-if="mesaRecomendada">Mesa recomendada: {{mesaRecomendada}}</small>
      </div>

      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre"
          v-model="reserva.nombre" 
          required 
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="telefono">Teléfono</label>
        <input 
          type="tel" 
          id="telefono"
          v-model="reserva.telefono" 
          required 
          class="form-control"
          pattern="[0-9]{9}"
          title="Introduce un número de teléfono válido (9 dígitos)"
        />
      </div>

      <div class="form-group submit-group">
        <button type="submit" class="btn-reservar" :disabled="!isFormValid">Reservar Mesa</button>
      </div>
    </form>
    <div v-if="mensaje" :class="['mensaje', { 'mensaje-error': mensaje.includes('Error') }]">
      {{ mensaje }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reserva: {
        fecha: '',
        hora: '',
        numeroPersonas: 1,
        nombre: '',
        telefono: '',
        estado: 'pendiente'
      },
      mensaje: '',
      horasComida: ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30'],
      horasCena: ['20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00']
    }
  },
  computed: {
    minDate() {
      const today = new Date();
      return today.toISOString().split('T')[0];
    },
    mesaRecomendada() {
      const personas = this.reserva.numeroPersonas;
      if (personas <= 2) return "Mesa para 2 personas";
      if (personas <= 4) return "Mesa para 4 personas";
      if (personas <= 6) return "Mesa para 6 personas";
      return "Mesa para 8 personas";
    },
    isFormValid() {
      return this.reserva.fecha && 
             this.reserva.hora && 
             this.reserva.numeroPersonas > 0 && 
             this.reserva.numeroPersonas <= 8 &&
             this.reserva.nombre && 
             this.reserva.telefono.length === 9;
    }
  },
  methods: {
    async submitReserva() {
      try {
        // Verificar disponibilidad primero
        const disponibilidadResponse = await fetch(`http://localhost:3000/api/reservas/disponibilidad?fecha=${this.reserva.fecha}&hora=${this.reserva.hora}&numeroPersonas=${this.reserva.numeroPersonas}`);
        const disponibilidadData = await disponibilidadResponse.json();

        if (!disponibilidadData.disponible) {
          this.mensaje = `Lo sentimos, no hay disponibilidad para ${this.reserva.numeroPersonas} personas en ese horario.`;
          return;
        }

        // Si hay disponibilidad, proceder con la reserva
        const reservaData = {
          fecha: this.reserva.fecha,
          hora: this.reserva.hora,
          numeroPersonas: Number(this.reserva.numeroPersonas),
          nombre: this.reserva.nombre,
          telefono: this.reserva.telefono,
          estado: 'pendiente'
        };

        const response = await fetch('http://localhost:3000/api/reservas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservaData),
        });
        
        const data = await response.json();
        if (response.ok) {
          this.mensaje = '¡Reserva creada con éxito! Te contactaremos para confirmarla.';
          this.resetForm();
          this.$emit('reserva-creada');
        } else {
          this.mensaje = data.error || 'Error al crear la reserva.';
          console.error('Detalle del error:', data);
        }
      } catch (error) {
        this.mensaje = 'Error de conexión.';
        console.error('Error completo:', error);
      }
    },
    resetForm() {
      this.reserva = {
        fecha: '',
        hora: '',
        numeroPersonas: 1,
        nombre: '',
        telefono: '',
        estado: 'pendiente'
      };
    },
  },
};
</script>

<style scoped>
.reserva-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.reserva-form h2 {
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.8rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group.submit-group {
  grid-column: 1 / -1;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
}

.help-text {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--primary-color);
}

.btn-reservar {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 300px;
}

.btn-reservar:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.btn-reservar:not(:disabled):hover {
  background-color: var(--accent-color);
}

.mensaje {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
}

.mensaje-error {
  background-color: #f44336;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .reserva-form {
    padding: 1rem;
  }
}
</style>