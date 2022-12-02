import { useEffect, useState } from "react"
import axios from "axios"

const useRandomLocation = () => {
    const [location, setLocation] = useState({})

    const randomID = () => {
        const id = Math.ceil(126*Math.random())
        return id;
    }

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/location/${randomID()}`
        axios.get(URL)
        .then(res => {
            setLocation(res.data)
        })
        .catch(error => console.log(error, 'Another Error XD'))
    }, [])

  return { location, setLocation }
}

export default useRandomLocation