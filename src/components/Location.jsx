const Location = ({name, dimension, type, population}) => {
  return (
    <section className='body__infoLocation'>
        <h1>Rick And Morty Wiki</h1>
        <div className='container__infoLocation'>
            <div className='infoLocation__tittle'>
                <h2>{name}</h2>
            </div>
            <div className='infoLocation__info'>
                <p><span>Type:</span> {type}</p>
                <p><span>Dimension:</span> {dimension}</p>
                <p><span>Population:</span> {population}</p>
            </div>
        </div>
    </section>
  )
}

export default Location
