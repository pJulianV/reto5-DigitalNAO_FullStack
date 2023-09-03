import { useState, useEffect } from "react";
import './TopBar.scss'
import notif from '../../assets/svg/notif.svg';
import chat from '../../assets/svg/chat.svg';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const TopBar = () => {
  const name = useSelector((state) => state.user.name);
  const surname = useSelector((state) => state.user.surname);

  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsRegister(location.pathname === '/register');
  }, [location]);

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = formatDate(date);
      setCurrentDate(formattedDate);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const userLocale = navigator.language || "es-ES";
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZoneName: "short"
    };
    return new Intl.DateTimeFormat(userLocale, options).format(date);
  };

  return ( 
    <>
      {isRegister ? null : (
        <div className="navbar top-bar">
          <div className="top-bar-left-content">
            <p className="welcome">Bienvenido, {name} {surname}</p>
            <p className="date">{currentDate}</p>
          </div>
          <div className="top-bar-right-content">
            <div className="top-bar-right-content-icons">
              <img src={chat} alt="Chat"/>
              <img src={notif} alt="Notifications"/>
            </div>
            <div className="top-bar-right-content-separator"/>
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
        </div>
      )}
    </>
  );
};
 
export default TopBar;
