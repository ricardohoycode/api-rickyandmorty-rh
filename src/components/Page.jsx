const Page = ({page, pageNumber, setPageNumber}) => {
  return (
    <article 
      className={`${pageNumber === page ? 'pageActive' : ''}`} 
      onClick={() => setPageNumber(page)}
    >{page}</article>
  )
}

export default Page