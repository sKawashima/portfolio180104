<template lang="pug">
#gradation
  .welcome 
</template>

<script>
export default {
}
</script>

<style lang="sass">
#gradation
  height: 50px
  width: 100%
  background: linear-gradient(lighten(#4e1a68, 50%), rgba(lighten(#4e1a68, 50%), 0))
  display: flex
  justify-content: space-around
  flex-flow: column
  align-items: center
  z-index: 5
.welcome
  color: white
  font-family: Texta-Thin
  font-size: 1.5em
</style>
