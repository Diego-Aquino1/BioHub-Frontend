<template>
  <h3 class="text-gray-700 text-3xl font-medium">
    Comparación de secuencias
  </h3>
 <div class="mt-8">
  <div class="p-6 bg-white rounded-md shadow-md">
    <h2 class="text-lg font-semibold text-gray-700 capitalize">
      Teoría de Comparación de Secuencias
    </h2>
    <p class="mt-2 text-gray-700">
      La comparación de secuencias es una técnica fundamental en bioinformática utilizada para identificar similitudes y diferencias entre secuencias de ADN, ARN o proteínas. Aquí se presentan los conceptos clave y métodos utilizados en la comparación de secuencias:
    </p>
    <ul class="mt-4 text-gray-700 list-disc list-inside">
      <li>
        <strong>Tipos de Alineaciones:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Alineación Global: Busca alinear dos secuencias a lo largo de toda su longitud. Ejemplo: Algoritmo de Needleman-Wunsch.</li>
          <li>Alineación Local: Identifica las regiones más similares dentro de dos secuencias. Ejemplo: Algoritmo de Smith-Waterman.</li>
        </ul>
      </li>
      <li>
        <strong>Matrices de Puntuación:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Matrices de Sustitución: Utilizadas para puntuar las alineaciones de secuencias de proteínas. Ejemplo: Matrices PAM y BLOSUM.</li>
          <li>Matrices de Similitud: Utilizadas para puntuar alineaciones de secuencias de nucleótidos.</li>
        </ul>
      </li>
      <li>
        <strong>Algoritmos de Alineación:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Algoritmo de Needleman-Wunsch: Utilizado para alineaciones globales.</li>
          <li>Algoritmo de Smith-Waterman: Utilizado para alineaciones locales.</li>
          <li>BLAST: Herramienta rápida para encontrar alineaciones locales aproximadas.</li>
        </ul>
      </li>
      <li>
        <strong>Penalización por Gaps:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Gap Simple: Penaliza cada gap con una puntuación fija.</li>
          <li>Gap Afinity: Penaliza la apertura de un gap con una puntuación alta y la extensión del gap con una puntuación menor.</li>
        </ul>
      </li>
      <li>
        <strong>Aplicaciones de la Comparación de Secuencias:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Inferencia Filogenética: Estudio de las relaciones evolutivas entre organismos.</li>
          <li>Identificación de Genes y Motivos: Localización de genes y regiones funcionales conservadas.</li>
          <li>Diagnóstico de Enfermedades: Identificación de mutaciones genéticas asociadas con enfermedades hereditarias.</li>
          <li>Diseño de Fármacos: Identificación de dianas terapéuticas mediante la comparación de secuencias proteicas.</li>
        </ul>
      </li>
      <li>
        <strong>Herramientas y Software:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>BLAST: Herramienta para encontrar regiones locales de similitud entre secuencias.</li>
          <li>Clustal: Software para la alineación múltiple de secuencias.</li>
          <li>MUSCLE: Herramienta de alineación múltiple de secuencias altamente precisa.</li>
          <li>T-Coffee: Herramienta para la alineación múltiple de secuencias que combina varios métodos de alineación para mejorar la precisión.</li>
        </ul>
      </li>
    </ul>
  </div>
  
  
  <div class="mt-8">
      <div class="p-8 bg-white rounded-md shadow-md w-full max-w-4xl mx-auto">
        <h2 class="text-lg font-semibold text-gray-700 capitalize">
          Ingresa Datos
        </h2>

        <form @submit.prevent="register">
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

            <div class="flex justify-end mt-4">
            <button
              class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Save
            </button>
          </div>
          
          </div>
        </form>
        </div>
    </div>
  
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface User {
  secuencia1: string
  secuencia2: string

}

const user = ref<User>({
  secuencia1: '',
  secuencia2: '',
})

function register() {
  const data = JSON.parse(JSON.stringify(user.value))
  console.log('Registered: ', data)
}
</script>