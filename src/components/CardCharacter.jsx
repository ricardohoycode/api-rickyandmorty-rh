import useCardData from "../hooks/useCardData"

const CardCharacter = ({urlCharacter}) => {
    const character = useCardData(urlCharacter)
  return (
    <article className="cardCharacter">
        <div className="containerStatus">
            <i 
            className={`bx bxs-circle ${ character?.status }`}
            />
            <p>{character?.status}</p>
        </div>
        <figure>
            <img src={character?.image} alt="Character image of Rick and Morty" />
            <figcaption>{character?.name}</figcaption>
        </figure>
        <hr />
        <p className="characterTittle">Race</p>
        <p>{character?.species}</p>
        <p className="characterTittle">Origin</p>
        <p>{character?.origin?.name}</p>
        <p className="characterTittle">Appearance episodes</p>
        <p>{character?.episode?.map(episodeU => episodeU.split('/')[episodeU.split('/').length - 1]).join(', ')}</p>
    </article>
  )
}

export default CardCharacter