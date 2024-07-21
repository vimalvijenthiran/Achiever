import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../assets/blog22.jpg'


const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
          <div className="post-detail__header">
            <PostAuthor/>
            <div className="post-detail__buttons">
               <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
               <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
            </div>
          </div>
          <h1>This is the post title!</h1>
          <div className="post-detail__thumbnail">
            <img src={Thumbnail} alt=""/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta accusamus ad ab, ducimus voluptatum beatae nulla commodi distinctio illo! Aliquid quidem, rem doloremque, magnam cupiditate ipsa dicta dolores libero totam perferendis ducimus accusantium fuga corporis, officia suscipit doloribus autem!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ut eligendi nesciunt voluptatum commodi dignissimos voluptates pariatur minima vitae quam porro obcaecati consectetur quos atque, harum officia libero doloremque dolores? Temporibus enim optio vitae quae, corporis ea magni, quibusdam laborum animi, nihil obcaecati architecto eveniet voluptatum ex odio saepe voluptates consectetur sit unde labore. Fugit!
          </p>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab impedit voluptate deleniti ipsam, saepe hic eos deserunt molestias, excepturi sed modi, doloremque accusamus fuga vero nihil voluptas nulla tempora illo rerum veritatis libero placeat non? Dolores suscipit mollitia nobis qui tenetur ipsum et officia? Obcaecati, id. Voluptatum optio odio cupiditate reiciendis adipisci temporibus veniam sed! Velit laborum quos dolorum quidem eligendi ea sed sunt mollitia fuga atque reprehenderit quo, soluta odio perferendis voluptates consequuntur, numquam deserunt! Minus modi hic obcaecati aliquid non, quod suscipit ullam. Nisi molestias, possimus enim repellat nulla doloremque cupiditate! Autem repellat ad quibusdam maxime exercitationem dolores asperiores alias, est cumque laudantium temporibus reiciendis a commodi veniam officia!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ducimus nam. Eum nemo voluptates at asperiores eius totam facilis unde.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde qui laboriosam repudiandae rerum sint voluptatum voluptates sed exercitationem nobis reprehenderit? Modi, omnis voluptatem repudiandae quo perspiciatis pariatur unde nihil tempora aperiam accusantium suscipit illo itaque odio velit animi dolorum magnam accusamus numquam doloribus recusandae. Accusamus quas sequi aperiam quod dolore minus odio maxime animi dolorem perspiciatis debitis dignissimos mollitia nemo, repudiandae, architecto enim quos aut dolorum, accusantium facere saepe recusandae quidem. Accusantium totam recusandae soluta et, nesciunt beatae sequi aperiam? Dolore, ut earum, consequuntur recusandae neque odio eligendi autem rem aliquid hic soluta laudantium distinctio architecto nemo totam maxime officiis consequatur provident explicabo repudiandae vero doloribus sint. Enim fugiat placeat numquam optio, autem quos beatae quod aspernatur provident dolor, sapiente nemo magni eaque saepe consequatur. Exercitationem nesciunt debitis velit doloribus alias reprehenderit totam, quas aut aspernatur a consequuntur fugit. Sed laudantium dolorem libero reiciendis! Eius esse aspernatur sapiente molestias architecto dignissimos earum sequi culpa porro accusamus eum quidem, odio rem ut quae fugit fuga labore asperiores similique, nobis dolor! Aliquid fugiat cumque, perspiciatis quam earum, eius iusto dolores consectetur odit repudiandae asperiores veniam commodi sunt ex exercitationem eaque mollitia sed enim at. Quia aut officiis suscipit incidunt recusandae fuga quas.
          </p>
      
      </div>
    </section>
  )
}

export default PostDetail