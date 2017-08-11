<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import types from 'localVuex/types'
import Checkboxs from 'vt-checkbox'
import Cell from 'vt-cell'
import Buttons from 'vt-button'

export default {
  data() {
    return {
      po: {
        content: '',
        status: types.todo   // todo done pigeonhole
      }
    }
  },
  mounted() {
  },
  methods: {
    addItem() {
      if (!this._checkContent()) return
      this.$store.commit('add', Object.assign({}, this.po, {
        createTime: +new Date()
      }))
      this.restInputBox()
    },
    _checkContent() {
      if (!this.po.content) {
        this.$alert({
          text: '输入内容为空'
        })
        return false
      }
      return true
    },
    restInputBox() {
      this.po.content = ''
      this.$refs.input.focus()
    },
    selectItem(index) {
      this.$store.commit('select', index)
    },
    updateItem(v) {
      this.$store.commit('update', { status: v ? types.done : types.todo })
    },
    remove(index) {
      this.$store.commit('remove', index)
      this.restInputBox()
    }
  },
  computed: {
    listedTodos() {
      console.log(this.$store.getters.listedTodos)
      return this.$store.getters.listedTodos
    },
    undoTodos() {
      return this.$store.getters.undoTodos
    },
    doneTodos() {
      return this.$store.getters.doneTodos
    },
    pigeonholedTodos() {
      return this.$store.getters.pigeonholedTodos
    }
  },
  components: {
    Checkboxs,
    Cell,
    Buttons
  }
}
</script>
