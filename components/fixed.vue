<template lang="pug">
.back
  .line
</template>

<script>
export default {
}
</script>

<style lang="sass">
.back
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: -1
  .line
    position: absolute
    left: 0
    top: 0
    width: calc(50% + 1.5px)
    height: 100%
    border-right: 3px solid #4e1a68
</style>
