<template>
  <pre class="pokemon">
    {{ pokemon }}
  </pre>
</template>
<script setup>
import { useQuery, useResult } from '@vue/apollo-composable';
import { POKEMON_DETAIL_QUERY } from '@/queries';
import { useRoute } from 'vue-router';

const route = useRoute();
const { name } = route.params;


const { result } = useQuery(POKEMON_DETAIL_QUERY, { name });
const pokemon = useResult(result, null, data => data.pokemon);
</script>
<style scoped>
.pokemon {
  text-align: left;
}
</style>
