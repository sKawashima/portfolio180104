<template lang="pug">
section#works-list
  .backline
    .line
  .items
    .item#w0
      img(src="~/assets/soracamera.com.png")
      .desc
        h1 タイトル
        p 製作期間とか
    .item#w1
      img(src="~/assets/soracamera.com.png")
      .desc
        h1 タイトル
        p 製作期間とか
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
$boader-width: 1px

#works-list
  width: 100%
  height: auto
  position: relative
  margin-top: 20px
  padding: 20px 0
  .backline
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    .line
      width: calc(50% + #{$boader-width} / 2)
      height: 100%
      border-right: $boader-width #4e1a68 solid
  .items
    width: 1000px
    position: relative
    left: 0
    right: 0
    margin: auto
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    box-sizing: border-box
    border: 1px rgba(#4e1a68, 0) solid
    #w0
      margin-top: 0
    .item
      display: flex
      justify-content: space-between
      height: auto
      width: 100%
      transition: .3s
      margin-top: 20px
      img
        width: 470px
        height: auto
        align-self: flex-start
      .desc
        width: 470px
        text-align: left
        font-size: .8em
      &:hover
        // background-color: #fff
        border: 1px #4e1a68 solid
        padding: 10px
</style>
