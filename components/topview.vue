<template lang="pug">
section#topview
  .space
  sK.logo
  h1 s<span class="b">K</span>awashima's<br>Portfolio
  .space
</template>

<script>
import sK from '~/components/sK.vue'

export default {
  components: {
    sK
  }
}
</script>

<style lang="sass" scoped>
#topview
  display: flex
  flex-flow: column
  justify-content: space-between
  align-items: center
  text-align: center
  width: 100%
  min-height: 500px
  background-color: #4e1a68
  background: linear-gradient(#4e1a68, lighten(#4e1a68 ,25%))
  z-index: 5
  @media screen and (max-width: 768px)
    min-height: 70vw
    justify-content: center
  .logo
    width: 150px
    height: auto
    margin-top: 20px
    @media screen and (max-width: 768px)
      width: 15%
  h1
    // margin-top: 100px
    font-size: 3.33em
    color: #fff
    font-family: TextaAlt-Thin
    line-height: 1.2em
    .b
      font-family: Texta-Heavy
    @media screen and (max-width: 768px)
      margin-top: .5em
      font-size: 2em
</style>
