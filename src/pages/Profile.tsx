import Avatar from "../images/WIN_20220906_19_33_10_Pro.jpg";
const data = {
  نام: "امیرمحمد",
  "نام خانوادگی": "مهری",
  ایمیل: "shadmehri@fan.com",
  کشور: "ایران",
  "نام کاربری": "shadmehrfan",
  رمزعبور: "1234",
};
const Profile = () => {
  return (
    <div className="profile flex flex-col space-y-5 text-center">
      <div className="name">
        نام
        <div className="font-semibold">{data.نام}</div>
      </div>
      <div className="name">
        نام خانوادگی
        <div className="font-semibold">{data["نام خانوادگی"]}</div>
      </div>
      <div className="name">
        ایمیل
        <div className="font-semibold">{data.ایمیل}</div>
      </div>
      <div className="name ">
        کشور
        <div className="font-semibold">{data.کشور}</div>
      </div>
      <div className="name">
        نام کاربری
        <div className="font-semibold">{data["نام کاربری"]}</div>
      </div>
      <div className="name mx-auto">
        رمزعبور
        <div className="font-semibold">{data.رمزعبور}</div>
      </div>
    </div>
  );
};

export default Profile;
