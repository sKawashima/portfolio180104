<template lang="pug">
section.container
  topview
  gradation
  navi
  h1#works.title Works
  works
  //- h1#profile.title Profile
  //- profile
  //- h1#contact.title Contact
  //- contact
  copyright
</template>

<script>
import topview from '~/components/topview.vue'
import gradation from '~/components/gradation.vue'
import navi from '~/components/nav.vue'
import works from '~/components/works.vue'
import profile from '~/components/profile.vue'
import contact from '~/components/contact.vue'
import copyright from '~/components/footer.vue'

export default {
  components: {
    topview,
    gradation,
    navi,
    works,
    profile,
    contact,
    copyright
  }
}
</script>

<style lang="sass">
html
  background-color: #4e1a68
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI","Noto Sans Japanese","ヒラギノ角ゴ ProN W3", Meiryo, sans-serif

@font-face
  font-family: TextaAlt-Thin
  src: url(../assets/TextaAlt-Thin-webfont.woff)

@font-face
  font-family: Texta-Thin
  src: url(../assets/Texta-Thin-webfont.woff)

@font-face
  font-family: Texta-Heavy
  src: url(../assets/Texta-Heavy-webfont.woff)
</style>

<style lang="sass" scoped>
.container
  min-height: 100vh
  min-width: 1000px
  display: flex
  flex-flow: column
  justify-content: flex-start
  align-items: center
  text-align: center
  background-color: #fff

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

@media screen and (max-width: 768px)
  .container
    min-width: auto
</style>
