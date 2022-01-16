import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Profile = () => {
  const [userId, setUserId] = useState();
  const [nickName, setNickName] = useState();

  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: '/v2/user/me',
        success: function(response) {
        }, fail: function(err) {
        console.log(err)
      }
    });
    setUserId(data.id);
    setNickName(data.properties.nickname);
    } catch (err) {
      console.log(err);
    }
  };

  const sendProfile = async () => {
    try{
      let data = await window.Kakao.API.request({
        url: '/v2/user/me',
        success: function(response) {
        }, fail: function(err) {
          console.log(err)
        }
      });
      setUserId(data.id);
      setNickName(data.properties.nickname);
      const json = {"id":userId, "name": nickName};
      axios.post('/user', json) // 주소 적기
      .then( function(response){
        console.log(response);
      })
      .catch( function(error) {
        console.log(error);
      })
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getProfile();
    sendProfile();
  }, []);
  return (
    <div>

      <h1>hello</h1>
      <h2>{userId}</h2>
      <h2>{nickName}</h2>
    </div>
  );
};
export default Profile;