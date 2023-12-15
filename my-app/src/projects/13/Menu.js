import MenuItem from "./MenuItem"
import {useAppCtx} from 'src/projects/13/app_ctx.js'

const Menu = () => {
  const {cart,remove_all,total} = useAppCtx()
  return <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map(item=><MenuItem key={item.id} {...item}/>)}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={remove_all}>
          clear cart
        </button>
      </footer>
    </section>

}

export default Menu