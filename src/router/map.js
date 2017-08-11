export default {
  '/todo': {
    meta: { title: 'todo' },
    component: resolve => {
      require(['pages/todo'], resolve)
    }
  }
}
