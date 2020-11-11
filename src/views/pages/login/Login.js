import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CAlert,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { setJwtToken, getJwtToken } from "../../../services/LocalStorage";
import { loginUser } from "../../../services/UserService";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    errorMessage: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      errorMessage: "",
      [id]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let data = { username: state.username, password: state.password };
    loginUser(data)
      .then((response) => {
        if (response.data.status === true) {
          setJwtToken(response.data.data);
          window.location.reload();
        } else {
          setState((prevState) => ({
            ...prevState,
            errorMessage: response.data.message,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      {getJwtToken() ? (
        <Redirect to="dashboard"></Redirect>
      ) : (
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="4">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
                          autoComplete="username"
                          onChange={handleChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={handleChange}
                        />
                      </CInputGroup>
                      <CRow className="mb-4">
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={handleLogin}
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          {/* <CButton color" className="px-0">Forgot password?</CButton> */}
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol>
                          {state.errorMessage ? (
                            <CAlert color="danger">
                              {state.errorMessage}
                            </CAlert>
                          ) : null}
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                    <CCardBody className="text-center">
                    <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                       to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                        >
                    </div>
                    </CCardBody>
                </CCard> */}
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      )}
    </div>
  );
};

export default Login;
