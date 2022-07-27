import Ava from './Ava/Ava'
import Info from './Info/Info';
import s from './Ava_info.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.ava_info}>
      <Ava/>
      <Info/>
    </div>
  );
};

export default ProfileInfo;
