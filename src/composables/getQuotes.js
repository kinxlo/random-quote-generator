import { ref } from 'vue'

const getQuotes = () => {
  const quotes = ref([])
  const error = ref(null)

  const getData = async () => {
    try {
      let data = await fetch(`https://type.fit/api/quotes`)

      if (!data.ok) {
        throw Error('no data available')
      }
      quotes.value = await data.json()
      // console.log(quotes.value)
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { quotes, error, getData }
}

export default getQuotes
