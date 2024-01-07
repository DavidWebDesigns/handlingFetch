import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
    const [fact, setFact] = useState()
    const refreshFact = () => {

        getRandomFact().then(newFact => setFact(newFact))
    }

  // [] evita que se recargue la pagina en loop, en vez de [] se pueden colocar determinantes que condicionen cuando
  //se ha de ejecutar el useEffect nuevamente.
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}