import { Link } from "react-router-dom";
import useFetch from "src/hooks/useFetch"
import Loading from "src/components/Loading"

const List = ({kw}) => {
  let endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${kw}`
  const {data,loading} = useFetch(endpoint)
  if(loading){
    return <Loading />
  }
  if(data?.drinks===null){
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {
          data.drinks?.map(item=>{
            const {strDrink,strAlcoholic,strGlass,idDrink,strDrinkThumb} = item    
            return <article className='cocktail'>
              <div className='img-container'>
                <img src={strDrinkThumb} alt={strDrink} />
              </div>
              <div className='cocktail-footer'>
                <h3>{strDrink}</h3>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p>
                <Link to={`/detail/${idDrink}`} className='btn btn-primary btn-details'>
                  details
                </Link>
              </div>
            </article>    
            } )
        }
      </div>
    </section>
}

export default List