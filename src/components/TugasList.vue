<template>
    <div class="tugas-list">
      <h2 class="widget-title mb-4">Daftar Tugas Adriansyah</h2>
      <div class="tugas-container">
        <router-link v-for="i in 7" :key="i" :to="'/tugas' + i" class="tugas-item">
          <img :src="`/images/tugas${i}.png`" :alt="`Tugas ${i}`" class="tugas-image"/>
          <p class="tugas-label">Tugas {{ i }}</p>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TugasList',
  };
  </script>
  
  <style scoped>
  .tugas-list {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 50px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .widget-title {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  
  .tugas-container {
    max-height: 400px; 
    overflow-y: auto;  
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .tugas-item {
    text-align: center;
    text-decoration: none;
  }
  
  .tugas-image {
    max-width: 500px;
    max-height: 200px;
    object-fit: contain;
    margin-bottom: 10px;
  }
  
  .tugas-label {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
  </style>
  