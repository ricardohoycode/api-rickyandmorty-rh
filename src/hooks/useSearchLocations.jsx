import { useEffect, useState } from "react"
import axios from "axios"

const useSearchLocations = (nameLocation) => {
    const [searchedLocations, setSearchedLocations] = useState([])

    useEffect(() => {
        if(nameLocation){
            const URL = `https://rickandmortyapi.com/api/location/?name=${nameLocation}`
            axios.get(URL)
            .then(res => setSearchedLocations(res.data.results))
            .catch(error => {
                console.log(error)
                setSearchedLocations([])
            })
        }else {
            setSearchedLocations([])
        }
    }, [nameLocation])
    
  return searchedLocations
}

export default useSearchLocations