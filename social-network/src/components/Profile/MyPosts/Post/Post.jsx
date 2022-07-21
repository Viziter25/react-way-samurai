import s from './Post.module.css'
const Post = (props) => {
  return (
    <div>
      <div className={s.item}>{props.message}</div>
      <span>like {props.count}</span>
    </div>
  );
}

export default Post;