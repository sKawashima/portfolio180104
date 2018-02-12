<template lang="pug">
section.container
  topview
  gradation
  h1.title Works
  |
  h2.subtitle
    | portfolio with nuxt
  |
  .links
    nuxt-link(to='template') &#x30DA;&#x30FC;&#x30B8;&#x9077;&#x79FB;&#x306E;&#x30C6;&#x30B9;&#x30C8;
    |
    a.button--green(href='https://nuxtjs.org/', target='_blank') Documentation
    |
    a.button--grey(href='https://github.com/nuxt/nuxt.js', target='_blank') GitHub
</template>

<script>
import topview from '~/components/topview.vue'
import gradation from '~/components/gradation.vue'

export default {
  components: {
    topview,
    gradation
  }
}
</script>

<style lang="sass">
html,body
  // background-color: #4e1a68
  font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI","Noto Sans Japanese","ヒラギノ角ゴ ProN W3", Meiryo, sans-serif

@font-face
  font-family: TextaAlt-Thin
  src: url(~/assets/TextaAlt-Thin-webfont.woff)

@font-face
  font-family: Texta-Thin
  src: url(~/assets/Texta-Thin-webfont.woff)

@font-face
  font-family: Texta-Heavy
  src: url(~/assets/Texta-Heavy-webfont.woff)
</style>

<style lang="sass" scoped>
.container
  min-height: 100vh
  display: flex
  flex-flow: column
  justify-content: flex-start
  align-items: center
  text-align: center

.title
  font-family: Texta-Thin
  display: block
  font-size: 3.33em
  color: desaturate(#4e1a68, 30%)
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px
</style>
