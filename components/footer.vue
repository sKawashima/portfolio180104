<template lang="pug">
footer
  p Art for Design, Design for Development.<br>
    | <br>
    | ©2018 sKawashima
</template>

<script>
export default {
}
</script>

<style lang="sass">
footer
  width: 100%
  min-width: 1000px
  @media screen and (max-width: 768px)
    min-width: auto
  height: 150px
  background-color: #4e1a68
  background: linear-gradient(desaturate(#4e1a68 , 20%), #4e1a68)
  display: flex
  justify-content: center
  align-items: center
  flex-flow: column
  p
    color: #fff
    font-family: Texta-Heavy
    font-size: 1.2em
</style>
