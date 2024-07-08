<template>
  <h3 class="text-gray-700 text-3xl font-medium">
    Needleman-Wunsch
  </h3>
  <div class="mt-8">
    
    <div class="mt-4">
      <div class="p-6 bg-white rounded-md shadow-md">
        <h2 class="text-lg font-semibold text-gray-700 capitalize">
          Algoritmo de Needleman-Wunsch
        </h2>

        <p class="mt-2 text-gray-700">
          <li>El algoritmo de Needleman-Wunsch es un método clásico en bioinformática utilizado para alinear secuencias de ADN o proteínas. Utiliza programación dinámica para encontrar la alineación global óptima entre dos secuencias, maximizando el puntaje de similitud.</li>
        </p>
        <p class="mt-2 text-gray-700">
          <li>Utiliza una matriz para calcular los puntajes de alineación entre cada par de caracteres de las dos secuencias. Los puntajes pueden ser positivos para coincidencias, negativos para penalizar las diferencias, y cero para gaps (espacios en la alineación).</li>
        </p>
        <p class="mt-2 text-gray-700">
          <li>Una vez completa la matriz de puntaje, se utiliza un proceso de retroceso (backtracking) para reconstruir la alineación óptima a partir de la matriz. Esto permite determinar las posiciones específicas de las coincidencias, gaps y diferencias en las secuencias alineadas.</li>
        </p>
        <p class="mt-2 text-gray-700">
          <li>El algoritmo tiene una complejidad de tiempo de O(m * n), donde m y n son las longitudes de las dos secuencias, debido al llenado de la matriz de puntaje y al proceso de retroceso.</li>
        </p>
        <p class="mt-2 text-gray-700">
          <li>Es fundamental en bioinformática para comparar secuencias genéticas o proteicas, identificar regiones conservadas o similares entre diferentes especies, y para estudiar la evolución molecular.</li>
        </p>
      </div>
    </div>

    <div class="mt-8">
      <div class="p-8 bg-white rounded-md shadow-md w-full max-w-4xl mx-auto">
        <h2 class="text-lg font-semibold text-gray-700 capitalize">
          Ingresa Datos
        </h2>

        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700" for="secuencia1">Secuencia 1</label>
              <input
                v-model="user.secuencia1"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="text"
              >
            </div>

            <div>
              <label class="text-gray-700" for="secuencia2">Secuencia 2</label>
              <input
                v-model="user.secuencia2"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="text"
              >
            </div>

            <div>
              <label class="text-gray-700" for="match">Match</label>
              <input
                v-model="user.match"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="text"
              >
            </div>

            <div>
              <label class="text-gray-700" for="mismatch">Mismatch</label>
              <input
                v-model="user.mismatch"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="text"
              >
            </div>

            <div>
              <label class="text-gray-700" for="gap">Gap</label>
              <input
                v-model="user.gap"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="text"
              >
            </div>
          </div>

          <div class="flex justify-end mt-4">
            <button
              class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Save
            </button>
          </div>
        </form>

        <div v-if="loading" id="loading" class="mt-4">Loading...</div>
        <div v-if="error" id="error" class="mt-4 text-red-500">{{ error }}</div>
        <div v-if="results" id="results" class="mt-4">
          <div id="finalScore" class="mt-2">Final Score: {{ results.final_score }}</div>
          <div id="scoreMatrix" class="mt-2">
            <div v-for="(row, rowIndex) in results.score_matrix" :key="rowIndex" style="display: flex;">
              <div v-for="(cell, cellIndex) in row" :key="cellIndex" class="matrix-cell">{{ cell }}</div>
            </div>
          </div>
          <div id="alignments" class="mt-2">
            <div v-for="(alignment, index) in results.alignments" :key="index">{{ alignment }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios' // Asegúrate de tener axios instalado y configurado

interface User {
  seq1: string
  seq2: string
  match: string
  mismatch: string
  gap: string
}

const user = ref<User>({
  seq1: '',
  seq2: '',
  match: '',
  mismatch: '',
  gap: '',
})

const loading = ref(false)
const error = ref('')
const results = ref(null)

const submitForm = async () => {
  loading.value = true
  error.value = ''
  results.value = null

  const data = JSON.parse(JSON.stringify(user.value))

  try {
    const response = await axios.post('http://localhost:8000/algorithms/needleman', data)
    results.value = response.data
  } catch (err) {
    error.value = 'Error: ' + err.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.matrix-cell {
  border: 1px solid #ddd;
  padding: 5px;
  margin: 2px;
}
</style>
