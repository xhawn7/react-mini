import useFetch from "src/hooks/useFetch"
import { useParams, Link } from 'react-router-dom'
const Detail = () =>{
  const {id} = useParams()
  let detailEndpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const {data,loading} = useFetch(detailEndpoint)
  const {strDrink ,strDrinkThumb,strCategory,strAlcoholic,strGlass,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = data?.drinks?.[0] || {}
  const strIngredientArray = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
  if(loading){
    return <>loading...</>
  }
  if(!strDrink){
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  return <section className='section cocktail-section'>
  <Link to='/' className='btn btn-primary'>
    back home
  </Link>
  <h2 className='section-title'>{strDrink}</h2>
  <div className='drink'>
    <img src={strDrinkThumb} alt={strDrink}></img>
    <div className='drink-info'>
      <p>
        <span className='drink-data'>name :</span> {strDrink}
      </p>
      <p>
        <span className='drink-data'>category :</span> {strCategory}
      </p>
      <p>
        <span className='drink-data'>info :</span> {strAlcoholic}
      </p>
      <p>
        <span className='drink-data'>glass :</span> {strGlass}
      </p>
      <p>
        <span className='drink-data'>instructons :</span> {strInstructions}
      </p>
      <p>
        <span className='drink-data'>ingredients :</span>
        {strIngredientArray.join('*')}
      </p>
    </div>
  </div>
</section>
  // <>
  //   <div>Name : {strDrink}</div>
  //   <div>Category : {strCategory}</div>
  //   <div>Info : {strAlcoholic}</div>
  //   <div>Glass : {strGlass}</div>
  //   <div>Instructons : {strInstructions}</div>
  //   <div>Ingredients : {strIngredientArray.join('*')}</div>
  // </>
}

export default Detail