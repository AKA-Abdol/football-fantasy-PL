import Avatar from "../images/WIN_20220906_19_33_10_Pro.jpg";
import Edit from "../images/edit-2.svg";
import LeftLine from "../images/Line 2.svg";
import RighttLine from "../images/Line 3.svg";

const data = {
  firstname: "امیرمحمد",
  lastname: "مهری",
  email: "shadmehri@fan.com",
  country: "ایران",
  username: "shadmehrfan",
  password: "1234",
};

const Button = () => {
  return (
    <div className="edit w-full flex flex-row-reverse border-2 border-[#3d195b] rounded-lg px-32 py-2 mb-5">
      <img src={Edit} alt="edit" />
      <div className="text">ویرایش</div>
    </div>
  );
};
const Profile = () => {
  return (
    <div className="profile my-[5%] flex flex-col justify-center items-center space-y-5 text-center">
      <div className="title hidden md:block font-semibold text-[#3D195B] md:flex flex-row space-x-9">
        <img src={RighttLine} alt="line" />
        <div className="">اطلاعات فردی</div>
        <img src={LeftLine} alt="line" />
      </div>
      <img
        src={Avatar}
        alt="avatar"
        className="rounded-full object-scale-down h-20 w-20"
      />
      <div className="md:flex md:flex-row-reverse text-[#333333]">
        <div className="col1 md:flex md:flex-col md:space-y-6 px-16">
          <div className="firstname ">
            نام
            <div className="font-semibold text-[#3D195B]">{data.firstname}</div>
          </div>
          <div className="lastname">
            نام خانوادگی
            <div className="font-semibold text-[#3D195B]">{data.lastname}</div>
          </div>
          <div className="email">
            ایمیل
            <div className="font-semibold text-[#3D195B]">{data.email}</div>
          </div>
        </div>
        <div className="col2 md:flex md:flex-col md:space-y-6 px-16">
          <div className="country">
            کشور
            <div className="font-semibold text-[#3D195B]">{data.country}</div>
          </div>
          <div className="username">
            نام کاربری
            <div className="font-semibold text-[#3D195B]">{data.username}</div>
          </div>
          <div className="password">
            رمزعبور
            <div className="font-semibold text-[#3D195B]">{data.password}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:flex-col">
        <Button />
      </div>
    </div>
  );
};

export default Profile;
