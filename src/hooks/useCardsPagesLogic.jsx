import { useEffect } from "react"
import CardCharacter from "../components/CardCharacter";
import Page from "../components/Page";

const useCardsPagesLogic = (location, setCards, setPages, pageNumber, setPageNumber) => {
    useEffect(() => {
        if(Object.keys(location).length !== 0){
            const arrayPages = []
            const pageAmount = Math.ceil(location?.residents.length / 20)
            for(let i = 1; i <= pageAmount; i++){
              arrayPages.push((
                <Page 
                  key={i} 
                  page={i} 
                  pageNumber={pageNumber} 
                  setPageNumber={setPageNumber}
                />
              ))
            }
            setPages(arrayPages)
        }
      }, [pageNumber, location])

    useEffect(() => {
        if(Object.keys(location).length !== 0){
          const pageAmount = Math.ceil(location?.residents.length / 20)
          const arrayCards = []
          for(let i = 0; i <= pageAmount - 1; i++){
            const subArraycards = []
            for(let cardAmount = (i + 1)*20 - 20;cardAmount < (i+1)*20 && cardAmount <= location?.residents.length - 1;cardAmount++){
              subArraycards.push((
              <CardCharacter 
                key={location?.residents[cardAmount]} 
                urlCharacter={location?.residents[cardAmount]} 
              />
              ))
            }
            arrayCards.push(subArraycards)
          }
          setCards(arrayCards)
        }
      }, [location])
}

export default useCardsPagesLogic