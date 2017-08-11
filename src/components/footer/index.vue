<template>
  <ul class="footer__list">
    <li class="[ index == activated ? footer__item--active : '' , 'footer__item']" @click="trigger(index)" v-for="(item, index) in list">
    </li>
  </ul>
</template>
<style>

</style>
<script>
export default {
  props: {
    active: {
      type: Number,
      default: 0
    },
    list: []
  },
  data() {
    return {
      activated: this.active
    }
  },
  watch: {
    active(){
      this.activated = this.active
    }
  },
  methods: {
    trigger(idx) {
      this.activated = idx
    }
  }
}
</script>


