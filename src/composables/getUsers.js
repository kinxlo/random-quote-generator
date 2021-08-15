import { ref } from 'vue'

const getUsers = () => {
  const users = ref([])
  const error = ref(null)

  const getData = async () => {
    try {
      let data = await fetch(`https://jsonplaceholder.typicode.com/users`)

      if (!data.ok) {
        throw Error('no data available')
      }
      users.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { users, error, getData }
}

export default getUsers
