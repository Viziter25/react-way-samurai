import s from './Post.module.css'
const Post = (props) => {
  return (
    <div>
      <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt='img'></img>
      <div className={s.item}>{props.message}</div>
      <span>like {props.likecount}</span>
    </div>
  );
}

export default Post;