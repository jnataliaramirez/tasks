import './styles.css'

const ListTasks = (props) => {
  return (
    <section>
      <ul className='listTasks__list' >
        {props.children}
      </ul>
    </section>
  )
}

export { ListTasks }