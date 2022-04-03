import gql from 'graphql-tag'

export const POKEMONS_LIST_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        name
        dreamworld
      }
    }
  }
`

export const POKEMON_DETAIL_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
        name
        abilities {
          ability {
            name
          }
          slot
        }
        weight	
        height
        sprites {
          back_default
          back_female
          back_shiny
          back_shiny_female
          front_default
          front_female
          front_shiny
          front_shiny_female
        }
        base_experience
        stats {
          base_stat
          effort
          stat {
            name
          }
        }
      }
  }

`
