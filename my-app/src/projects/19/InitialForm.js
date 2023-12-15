import { useFormCtx } from "./FormCtx"
import { formItem } from "./form_data"
const InitialForm = () => {
  const {submitInit,error} = useFormCtx()
  return <main>
      <section className='quiz quiz-small'>
        <form className='setup-form' onSubmit={submitInit}>
          <h2>setup quiz</h2>
          {
            formItem.map(item=>{
              const {content,name,Component,props,children} = item
              return <div className='form-control'>
                <label htmlFor={name} >{content}</label>
                <Component name={name} id={name} {...props}>
                  {
                    children?.map(item=><option value={item.id || item.value}>{item.value}</option>)
                  }
                </Component>
              </div>
            })
          }
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button type='submit' className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
}

export default InitialForm