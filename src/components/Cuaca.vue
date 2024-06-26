<template>
  <div class="Cuaca p-4 bg-light rounded shadow">
    <h2 class="widget-title mb-4">Cuaca</h2>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        v-model="location"
        placeholder="Masukkan Lokasi"
      />
      <div class="input-group-append">
        <button class="btn-primary" type="button" @click="fetchWeatherData">
          Cari
        </button>
      </div>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location mb-2">Lokasi: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Temperatur: {{ Math.round(weatherData.main.temp - 273.15) }}°C
      </p>
      <p v-if="weatherData.weather" class="description mb-0">
        Deskripsi: {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else class="loader">Loading data...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "",
      weatherData: null,
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = "bda5cfe4237194db44ed1333313f9707";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>

<style scoped>

.Cuaca {
  max-width: 800px;
  margin: 200px auto;
  padding: 20px;
  background: linear-gradient(135deg, #868484, #f0f0f0); 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; 
}

.Cuaca:hover {
  transform: translateY(-5px); 
}

.widget-title {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px; 
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
}

.form-control {
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  flex: 1; 
}

.input-group-append .btn {
  border-radius: 5px;
  margin-left: -1px; 
}

.weather-data {
  text-align: center;
  margin-top: 20px;
}

.btn-primary {
  margin-left: 20px;
}

.location {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px; 
}

.temperature {
  font-size: 24px;
  color: #ff5722;
  font-weight: bold;
  margin-bottom: 5px; 
}

.description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px; 
}

.loader {
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
}
</style>
