import Button from "./Button/Button";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import Textarea from "./Textarea/Textarea";

const Myposts = () => {

let posts = [
  { id: "1", message: "My first post", likecount: "20" },
  { id: "2", message: "My second post", likecount: "10" },
];

let postElements = posts.map((el) => <Post message={el.message} likecount={el.likecount} />)

  return (
    <div className={s.postsBlock}>
      <h3> My post</h3>
      <div className={s.block_text}>
        <Textarea />
      </div>
      <div>
        <Button />
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default Myposts;
