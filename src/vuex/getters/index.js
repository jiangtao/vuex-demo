import statuses from '../types'

export default {
  listedTodos: ({ todos }) => todos.filter(({ status }) => [statuses.todo, statuses.done].indexOf(status) !== -1),
  doneTodos: ({ todos }) => todos.filter(({ status }) => status === statuses.done),
  undoTodos: ({ todos }) => todos.filter(({ status }) => status === statuses.todo),
  pigeonholedTodos: ({ todos }) => todos.filter(({ status }) => status === statuses.pigeonhole)
}
