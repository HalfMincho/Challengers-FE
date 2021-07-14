import React, { useCallback, useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";


// 리팩토링 할 예정
function SignUp({}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onSubmit = e => {
  }

  const onChangeEmail = (e) => {
    setEmailError(!isEmail(e.target.value));
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordLengthError(e.target.value.length < 8);
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeMobile = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setMobile(e.target.value);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    if (mobile.length === 10) {
      setMobile(mobile.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (mobile.length === 13) {
      setMobile(
        mobile.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [mobile]);

  const isEmail = (email) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };


  return (
    <>
      <div className="container">
        <h2 className="title">회원가입</h2>
        <form onSubmit={onSubmit} className="form" action="index.html">
          <div>
            <label htmlFor="user-email">이메일</label>
            <div>
              <input
                className="inputSmall"
                placeholder="이메일 주소"
                name="user-email"
                value={email}
                required
                onChange={onChangeEmail}
              />
              <button className="doubleCheck" onClick={}>
                중복확인
              </button>
              {emailError ? (
                <div className="errorMessage">
                  올바르지 않은 이메일 형식입니다.
                </div>
              ) : (
                <div className="noError">no error</div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <input
              className="input"
              type="password"
              placeholder="비밀번호"
              name="user-password"
              value={password}
              required
              onChange={onChangePassword}
            />
            {passwordLengthError ? (
              <div className="errorMessage">
                비밀번호는 8자 이상이어야 합니다.
              </div>
            ) : (
              <div className={"noError"}>no error</div>
            )}
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <input
              className={"input"}
              type="password"
              placeholder="비밀번호 확인"
              name="user-password-check"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError ? (
              <div className="errorMessage">
                비밀번호가 일치하지 않습니다.
              </div>
            ) : (
              <div className="noError">no error</div>
            )}
          </div>
          <div>
            <label htmlFor="user-mobile">휴대전화</label>
            <input
              className="input"
              placeholder="전화번호 입력('-' 제외)"
              name="user-mobile"
              value={mobile}
              required
              onChange={onChangeMobile}
            />
            <div className="noError">no error</div>
          </div>
          <div>
            <label htmlFor="user-name">이름</label>
            <input
              className={"input"}
              placeholder="이름(본명)"
              name="user-name"
              value={name}
              required
              onChange={onChangeName}
            />
            <div className="noError">no error</div>
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <div>
              <input
                className="inputSmall"
                placeholder="닉네임(별명)"
                name="user-nickname"
                value={nickname}
                required
                onChange={onChangeNickname}
              />
              <button className="doubleCheck">중복확인</button>
              <div className={noError}>no error</div>
            </div>
          </div>
          <div id="buttons">
            <Link to="/">
              <button id="backButton">돌아가기</button>
            </Link>
            <button
              id="signUpButton"
              htmltype="submt"
              onSubmit={onSubmit}
            >
              가입하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;