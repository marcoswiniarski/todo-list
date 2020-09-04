import { useState } from 'react'
import * as S from './style'

const List = () => {

  const [task, setTask] = useState<any>({ text: '', remaining: false })
  const [tasks, setTasks] = useState<Array<any>>([])
  const [count, setCount] = useState<Number>(0)

  const onHandleChange = (event: { target: { value: any } }) => {
    const task = { text: event.target.value }
    setTask(task)
  }

  const onHandleClick = (index: number) => {
    const newTasks = [...tasks]
    newTasks[index].remaining =  !newTasks[index].remaining
    setTasks(newTasks)

    let count = 0;
    newTasks.map((task) => !task.remaining ? count+=1 : null)
    setCount(count)
  }

  const addTask = () => {

    if (task.text === '')
      return

    const newTasks = [...tasks]
    newTasks.push(task)
    setTask({ text: '' })
    setTasks(newTasks)
    setCount(newTasks.length)
  }

  return (
    <S.Main>
      <S.Header>Todo list</S.Header>
      <S.Actions>
        <S.Input
          title='Caixa de texto para digitar a descrição da tarefa.'
          type='text'
          value={task.text}
          onChange={onHandleChange}
        />
        <S.Button
          title='Botão para adicionar novas tarefas a lista.'
          onClick={addTask}
        >
          Add
        </S.Button>
      </S.Actions>
      <S.Count title='Contador de quantas tarefas ainda faltam para resolver.'>
        {count} remaining of {tasks.length}
      </S.Count>
      <S.List>
        {
          tasks.map((task, index) => (
            <S.Item
              key={index}
              remaining={task.remaining}
              onClick={() => onHandleClick(index)}
            >
              {task.text}
            </S.Item>
          ))
        }
      </S.List>
    </S.Main>
  )
}

export default List