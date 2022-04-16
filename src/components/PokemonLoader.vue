<template>
  <div class="pokeball"></div>
  Loading the best pokemons of all time, please wait...
</template>
<script setup>
</script>

<style lang="scss">
// Size variable to keep all proportional if manipulate it
$size: 50px;
.pokeball {
  width: $size + 4px;
  height: $size;
  border-radius: $size;
  border: solid ($size/25) black;
  position: relative;    
  background: linear-gradient(to bottom, #EEEEEE 0%,#FFFFFF 100%);;
  margin: 10px auto;
  animation: 1.2s linear 1s infinite shake;
  
  &:before,
  &:after{
    content: "";
    display: block;
  }
  
  &,
  &:before,
  &:after{
    transition: all 600ms cubic-bezier(.67,.4,.36,.75);
  }
  
  &:before {
    width: $size;
    height: ($size/2) -($size/25/2);
    border-bottom: solid ($size/25) black;
    border-radius: ($size/2) ($size/2) 0 0;
    background: linear-gradient(to bottom, #d10000 0%,#ff0000 50%);
  }
  
  &:after {
    content: "";
    width: $size/5;
    height: $size/5;
    background: linear-gradient(to bottom, #fff 0%,#ccc 100%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    box-shadow: 0 0 0 ($size/50) black,
                0 0 0 ($size/25) #ddd,
                0 0 0 ($size/14) black,
                0 0 ($size/10) ($size/17) rgba(0,0,0,0.4);
  }
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
