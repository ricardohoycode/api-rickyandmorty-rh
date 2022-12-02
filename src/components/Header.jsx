import { useEffect, useState } from 'react'
import Name from '../img/Name.png'

const Header = ({ nameLocation, setNameLocation, searchedLocations, handleSearchedLocation }) => {
  const [isActiveInput, setIsActiveInput] = useState(false)

  const offInput = e => {
    if (e.target.classList[0] !== 'inputSearch' &&
      e.target.classList[0] !== 'listSearch') {
      setIsActiveInput(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', offInput)
  }, [])

  return (
    <header className='header'>
      <section className='header__searcher'>
        <article className='header__searcherContainer'>
          <input
            className='inputSearch'
            onFocus={() => setIsActiveInput(true)}
            value={nameLocation}
            placeholder='Dimension Searcher'
            onChange={e => {
              setIsActiveInput(true)
              setNameLocation(e.target.value)
            }}
            type="text"
          />
          <section className={`listSearch ${isActiveInput ? 'on' : 'off'}`}>
            {searchedLocations.map(searchedLocation => (
              <p
                key={searchedLocation?.url}
                onClick={() => handleSearchedLocation(searchedLocation?.url, searchedLocation.name)}
              >{searchedLocation.name}</p>
            ))}
          </section>
        </article>
      </section>
    </header>
  )
}

export default Header