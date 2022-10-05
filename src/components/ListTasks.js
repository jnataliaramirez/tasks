
const ListTasks = (props) => {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export { ListTasks }