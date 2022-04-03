<template>
  <p v-if="error">Error on fetching pokemons, what a pity...</p>
  <p v-else-if="loading">Loading greatest pokemons...</p>
  <p v-else v-for="pokemon in pokemons" :key="pokemon.id">
    {{ pokemon.name }}
    <img :src="pokemon.dreamworld" alt="img" />
  </p>
</template>

<script setup>
import { useQuery, useResult } from '@vue/apollo-composable';
import { POKEMONS_LIST_QUERY } from '@/queries';

const { result, loading, error } = useQuery(POKEMONS_LIST_QUERY, { limit: 9, offset: 0 });
const pokemons = useResult(result, null, data => data.pokemons.results);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
