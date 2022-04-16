<template>
  <v-container class="pokemon-wrapper">
    <template v-if="loading">
      <PokemonLoader />
    </template>
    <template v-else-if="error">
      {{ error }}
    </template>
    <template v-else>
      <v-btn @click="goBack" class="back-btn">
        <v-icon>mdi-chevron-left</v-icon>
        Back
      </v-btn>
      <div class="text-h2 mb-8">{{ capitalizeFirstLetter(pokemon.name) }}</div>
      <v-row>
        <v-col class="d-flex justify-space-between">
          <v-card class="mb-8" :width="sideWidth">
            <v-img
              :src="mainPictures.svg"
              cover
              :width="sideWidth"
            />
          </v-card>
          <v-card :width="sideWidth" class="mb-8">
            <v-card-title>Sprites:</v-card-title>
            <v-card-text>
              <v-carousel hide-delimiters class="sprites-carousel">
                <v-carousel-item
                  v-for="(sprite) in sprites"
                  :key="sprite"
                >
                  <v-img
                    :src="sprite"
                    cover
                    height="100%"
                  />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" class="text-left text-h5">
          <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
          <p><strong>Height:</strong> {{ pokemon.height }}</p>
          <p>
            <strong>Abilities:</strong>
            <ul class="ml-8">
              <li 
                v-for="({ ability: { name } }, index) in pokemon.abilities"
                :key="index"
              >
                {{ name }}
              </li>
            </ul>
          </p>
          <p>
            <strong>Stats:</strong>
            <ul class="ml-8">
              <li 
                v-for="(stat, index) in pokemon.stats"
                :key="index"
              >
                <strong>{{ stat.stat.name }}:</strong> {{ stat.base_stat }}
              </li>
            </ul>
          </p>

        </v-col>
      </v-row>
    </template>
  </v-container>
</template>
<script setup>
import PokemonLoader from '@/components/PokemonLoader.vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import { POKEMON_DETAIL_QUERY } from '@/queries';
import { useRoute, useRouter } from 'vue-router';
import { picturesGetter, capitalizeFirstLetter } from '@/helpers';
import { routeNames } from '@/plugins/router';

const route = useRoute();
const { name } = route.params;
const sideWidth = 500;

const { result, loading, error } = useQuery(POKEMON_DETAIL_QUERY, { name });
const sprites = useResult(result, null, data => {
  return Object.values(data.pokemon.sprites).filter(item => item);
});

const pokemon = useResult(result, null, data => data.pokemon);
const mainPictures = useResult(result, null, data => {
  return picturesGetter(data.pokemon.id);
});

const router = useRouter();
const goBack = async () => {
  await router.push({ name: routeNames.index });
}
</script>
<style scoped>
.pokemon {
  text-align: left;
}
.back-btn {
  position: absolute;
  left: 0;
  top: 22px;
}
.pokemon-wrapper {
  position: relative;
}
</style>

