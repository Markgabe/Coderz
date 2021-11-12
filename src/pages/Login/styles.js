import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ebedf3;
  justify-content: center;
  align-items: center;
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 60%;
  background-color: white;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const LoginHeader = styled.h1`
  color: #6699cc;
  font-size: 2.6em;
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

export const CustomInput = styled.input`
  width: 70%;
  height: 40px;
  padding: 10px;
  outline: none;
  border: 1px solid #676767;
  font-size: 1.2em;
  color: #676767;

  &:focus {
    border-color: #003b6d;
  }
`;

export const SubmitButton = styled.input`
  width: 70%;
  height: 40px;
  background-color: #6699cc;
  color: white;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const UserSignupRedirect = styled.div`
   display: flex;
   margin-top: 15px;
   gap: 10px;
`;

export const RedirectButton = styled(Link)`
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  color: #003b6d;
`;
