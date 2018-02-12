<template lang="pug">
section.container
  topview
  gradation
  nav
  h1#works.title Works
  works
  h1#profile.title Profile
  profile
  h1#contact.title Contact
  contact
</template>

<script>
import topview from '~/components/topview.vue'
import gradation from '~/components/gradation.vue'
import nav from '~/components/nav.vue'
import works from '~/components/works.vue'
import profile from '~/components/profile.vue'
import contact from '~/components/contact.vue'

export default {
  components: {
    topview,
    gradation,
    nav,
    works,
    profile,
    contact
  }
}
</script>

<style lang="sass">
html
  background-color: #4e1a68
  font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI","Noto Sans Japanese","ヒラギノ角ゴ ProN W3", Meiryo, sans-serif
body
  background-color: #fff

@font-face
  font-family: TextaAlt-Thin
  src: url(~/static/TextaAlt-Thin-webfont.woff)

@font-face
  font-family: Texta-Thin
  src: url(~/static/Texta-Thin-webfont.woff)

@font-face
  font-family: Texta-Heavy
  src: url(~/static/Texta-Heavy-webfont.woff)
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
  margin-top: 25px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px
</style>
