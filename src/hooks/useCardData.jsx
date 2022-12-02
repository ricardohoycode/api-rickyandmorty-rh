import { useState, useEffect } from "react"
import axios from "axios"

const useCardData = (urlCharacter) => {
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(urlCharacter)
        .then(res => setCharacter(res.data))
        .catch(error => console.log(error, 'Another Error XD'))
    }, [])

  return character
}

export default useCardData