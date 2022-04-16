import { loadFonts } from './plugins/webfontloader'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import plugins from '@/plugins'

loadFonts()

const cache = new InMemoryCache({
  addTypename: false,
})

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://graphql-pokeapi.graphcdn.app',
})


const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

plugins.forEach((plugin) => {
  app.use(plugin);
})

app.mount('#app');
