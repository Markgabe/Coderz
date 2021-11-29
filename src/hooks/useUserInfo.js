import { useState, useEffect } from 'react';

import { getLevel } from '../utils/LevelByXP';

export default function useUserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const userDataObject = JSON.parse(userData);
      userDataObject.level = getLevel(userData.xp);
      setUserInfo(userDataObject);
    }
  }, []);

  function updateUserInfo(newUserInfo) {
    const newUserData = { ...newUserInfo, level: getLevel(newUserInfo.xp) };
    setUserInfo(newUserData);
    localStorage.setItem('userData', JSON.stringify(newUserData));
  }

  function updateUserProperty(property, newValue) {
    userInfo[property] = newValue;
    localStorage.setItem('userData', JSON.stringify(userInfo));
  }

  return { ...userInfo, updateUserInfo, updateUserProperty };
}
