import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const REST_API_KEY = 'a77e93ca6119c6cecfe89bad506f9e1b';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const CLIENT_SECRET = '49EKSNqqQKAuCXFJCJW164f1pgtTLBlv';
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    const getToken = async () => {
      const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        client_secret: CLIENT_SECRET,
      });
      try{
        const res = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          payload
        );

        console.log(res)

        window.Kakao.init(REST_API_KEY);
        window.Kakao.Auth.setAccessToken(res.data.access_token);
        navigate('/survey', {replace: true});
      } catch (err) {
        console.log(err);
      }
    };
    getToken();
  }, []);
  return null;
};
export default Auth;