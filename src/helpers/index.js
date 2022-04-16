export const roundUp = (num, precision = null) => {
  if (precision) {
    const afterZero = Math.pow(10, precision);
    return Math.ceil(num * afterZero) / afterZero;
  }
  return Math.ceil(num);
}

const getPokemonImageUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
const getPokemonSvgUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

export const picturesGetter = (id) => ({
  image: getPokemonImageUrl(id),
  svg: getPokemonSvgUrl(id),
})

export const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
