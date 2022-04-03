<template>
  <div class="text-center mx-10">
    <p v-if="error">Error on fetching pokemons, what a pity...</p>
    <p v-else-if="loading">Loading greatest pokemons...</p>
    <v-row v-else>
      <v-col 
        v-for="pokemon in pokemons.results" 
        :key="pokemon.id"
        cols="4"
      >
        <v-card 
          class="mb-12 px-2 py-3"
          elevation="8"
        >
          <v-card-header class="justify-center text-h4 mb-4 font-weight-black text-capitalize">
            {{ pokemon.name }}
          </v-card-header>
          <v-card-text class="mb-4">
            <img class="pokemon-photo" :src="pokemon.dreamworld" alt="img" />
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn class="font-weight-bold" variant="outlined" flat :to="{ name: 'detail', params: { name: pokemon.name } }">
              Look detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="length"></v-pagination>
  </div>
</template>

<script setup>
import { useQuery, useResult } from '@vue/apollo-composable';
import { POKEMONS_LIST_QUERY } from '@/queries';
import { computed, ref, watch } from 'vue';
import { roundUp } from '@/helpers'

const PER_PAGE = 9;
const { result, loading, error, refetch } = useQuery(POKEMONS_LIST_QUERY, { limit: PER_PAGE, offset: 0 });
const pokemons = useResult(result, null, data => data.pokemons);
const count = useResult(result, null, data => data.pokemons.count);
const length = computed(() => roundUp(count.value / PER_PAGE))
const page = ref(1);
watch(page, (value) => {
  if (value) {
    console.log({ limit: PER_PAGE, offset: PER_PAGE * (value - 1) });
    refetch({ limit: PER_PAGE, offset: PER_PAGE * (value - 1) })
  }
})
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
.pokemon-photo {
  max-width: 100%;
  height: 300px;
}
</style>
