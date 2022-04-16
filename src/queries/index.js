import gql from 'graphql-tag'

export const POKEMONS_LIST_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        name
        dreamworld
        image
      }
    }
  }
`

export const POKEMON_DETAIL_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
        id
        name
        abilities {
          ability {
            name
          }
        }
        weight	
        height
        sprites {
          front_default
          front_female
          front_shiny
          front_shiny_female
        }
        stats {
          base_stat
          stat {
            name
          }
        }
      }
  }

`
