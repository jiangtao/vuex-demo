import statuses from '../types'
import getters from '../getters'

export default {
  add({ todos }, item) {
    todos.push(item)
  },
  remove({ todos }, index) {
    if (index === -1) {
      return false
    }
    todos.splice(index, 1)
    return true
  },
  removeItem({ todos }, item) {
    const index = this.findIndex({ todos }, item)
    return this.remove({ todos }, index)
  },
  findIndex({ todos }, item) {
    return todos.findIndex(todo => todo == item)
  },
  done(store, item) {
    item.status = statuses.done
  },
  undo(store, item) {
    item.status = statuses.todo
  },
  pigeonhole(store, item) {
    item.status = statuses.pigeonhole
  },
  select(store, index) {
    const list = getters.listedTodos(store)
    store.selectItem = list[index]
  },
  update({ selectItem }, { status, content }) {
    if (status !== void 0) {
      selectItem.status = status
    }
    if (content !== void 0) {
      selectItem.content = content
    }
  }
}
