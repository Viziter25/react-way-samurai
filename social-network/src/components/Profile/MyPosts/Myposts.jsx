import Button from "./Button/Button";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import Textarea from "./Textarea/Textarea";
const Myposts = () => {
  return (
    <div>
      <h2> My post</h2>
      <div className={s.block_text}>
        <Textarea />
      </div>
      <div>
        <Button />
      </div>
      <div className={s.posts}>
        <Post message= 'My first post' count='20' />
        <Post message='My second post' count ='10'/>
      </div>
    </div>
  );
};

export default Myposts;
