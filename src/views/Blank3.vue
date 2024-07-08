<template>
  <h3 class="text-lg font-semibold text-gray-700 capitalize">
   Smith Waterman
  </h3>
  <div class="mt-8">
  <div class="p-6 bg-white rounded-md shadow-md">
    <h2 class="text-lg font-semibold text-gray-700 capitalize">
      Algoritmo de Smith-Waterman
    </h2>
    <p class="mt-2 text-gray-700">
      El Algoritmo de Smith-Waterman es un algoritmo de alineación local utilizado en bioinformática para encontrar regiones de similitud entre dos secuencias de ADN, ARN o proteínas. Este algoritmo se basa en la programación dinámica y se utiliza para identificar las subsecuencias más similares dentro de las secuencias comparadas.
    </p>
    <ul class="mt-4 text-gray-700 list-disc list-inside">
      <li>
        <strong>Principales Características:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>
            Alineación Local: A diferencia del algoritmo de Needleman-Wunsch, que realiza alineaciones globales, el algoritmo de Smith-Waterman se centra en encontrar las regiones de mayor similitud dentro de las secuencias.
          </li>
          <li>
            Matriz de Puntuación: Utiliza una matriz para calcular los puntajes de alineación entre subsecuencias. La matriz se llena mediante una función de recurrencia que considera coincidencias, desajustes y gaps.
          </li>
          <li>
            Penalización por Gaps: Penaliza la introducción de gaps (espacios) en las alineaciones, favoreciendo las coincidencias y penalizando los desajustes.
          </li>
        </ul>
      </li>
      <li>
        <strong>Funcionamiento del Algoritmo:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>
            Inicialización: La primera fila y la primera columna de la matriz se inicializan con ceros, ya que la alineación puede comenzar en cualquier punto.
          </li>
          <li>
            Relleno de la Matriz: Cada celda de la matriz se llena con el valor máximo entre:
            <ul class="list-disc list-inside ml-4">
              <li>
                El puntaje de la celda diagonal superior izquierda más el puntaje de coincidencia o desajuste.
              </li>
              <li>
                El puntaje de la celda de la izquierda más la penalización por gap.
              </li>
              <li>
                El puntaje de la celda superior más la penalización por gap.
              </li>
              <li>
                Cero (para asegurar que no haya valores negativos en la matriz).
              </li>
            </ul>
          </li>
          <li>
            Retroceso (Backtracking): Comienza desde la celda con el puntaje más alto en la matriz y sigue el camino de los puntajes máximos para reconstruir la alineación local óptima.
          </li>
        </ul>
      </li>
      <li>
        <strong>Ventajas y Limitaciones:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>
            Ventajas: Permite identificar regiones de alta similitud en secuencias largas y es útil para encontrar motivos conservados.
          </li>
          <li>
            Limitaciones: El costo computacional puede ser elevado para secuencias muy largas, y la elección de las penalizaciones por gaps y los puntajes de coincidencia/desajuste puede influir en los resultados.
          </li>
        </ul>
      </li>
      <li>
        <strong>Aplicaciones del Algoritmo de Smith-Waterman:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>
            Comparación de Secuencias: Identificación de regiones de similitud entre secuencias de ADN, ARN o proteínas.
          </li>
          <li>
            Análisis Filogenético: Estudio de las relaciones evolutivas entre diferentes organismos.
          </li>
          <li>
            Detección de Motivos Conservados: Identificación de regiones funcionales conservadas en secuencias proteicas.
          </li>
          <li>
            Diagnóstico de Enfermedades: Identificación de mutaciones genéticas en secuencias de ADN.
          </li>
        </ul>
      </li>
      <li>
        <strong>Herramientas y Software:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>
            SSEARCH: Implementación del algoritmo de Smith-Waterman para la búsqueda de similitudes en bases de datos de secuencias.
          </li>
          <li>
            EMBOSS Water: Herramienta para la alineación local de secuencias utilizando el algoritmo de Smith-Waterman.
          </li>
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
      </div>
    </div>
  
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

interface User {
  secuencia1: string
  secuencia2: string
  match: string
  mismatch: string
  gap: string
}

const user = ref<User>({
  secuencia1: '',
  secuencia2: '',
  match: '',
  mismatch: '',
  gap: '',
})

function register() {
  const data = JSON.parse(JSON.stringify(user.value))
  console.log('Registered: ', data)
}
</script>