import AppLogo from "./../assets/logo.png";
import BarsIcon from "./../assets/bars-solid.svg";

export const Header = () => {
  return (
    <header className="bg-site w-full h-[60px] items-center flex">
      <nav className="wrapper flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-[40px] mr-2" src={AppLogo} alt="logo" />
          <h2 className="text-white">Health Overview</h2>
        </div>
        <img className="w-6 h-6" src={BarsIcon} />
      </nav>
    </header>
  );
};
