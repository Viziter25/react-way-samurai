import s from "./Textarea.module.css";

const Textarea = (props) => {
  return (
    <textarea useRef={props.newPostElement} className={s.textarea}></textarea>
  );
};

export default Textarea;
