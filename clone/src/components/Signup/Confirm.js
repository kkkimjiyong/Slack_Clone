import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSlack, __addSlack, __confirmSlack } from "../../redux/slackSlice";

const Confirm = () => {
  const confirmdata = useSelector((state) => state.slack.slack);
  console.log(confirmdata[0]?.payload);
  const confirmcode = confirmdata[0]?.data?.message;
  console.log(confirmcode);
  const dispatch = useDispatch();
  const [Confirmcode, SetConfirmcode] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });
  console.log(Confirmcode.one);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    SetConfirmcode({ ...Confirmcode, [name]: value });
    console.log(Confirmcode);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      Confirmcode.one === confirmcode[0] ||
      Confirmcode.two === confirmcode[1] ||
      Confirmcode.three === confirmcode[2] ||
      Confirmcode.four === confirmcode[3] ||
      Confirmcode.five === confirmcode[4] ||
      Confirmcode.six === confirmcode[5]
    )
      dispatch(__confirmSlack(confirmdata[0]?.payload));

    // e.preventDefault();
  };

  return (
    <SignupCtn>
      <div>
        <img
          style={{ transform: "scale(0.4)", height: "100px" }}
          src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg"
          alt="sd"
        />
      </div>
      <TextBox>코드는 이메일에서 확인하세요</TextBox>
      <TextMail>
        <span style={{ fontWeight: "600", color: "#454245", fontSize: "24px" }}>
          wldyddkssud@naver.com
        </span>
        에 6자리 코드를 전송했습니다. 코드는 잠시 후에 만료되니 서둘러
        입력하세요.
      </TextMail>
      <ConfirmWrapper>
        <ConfirmCtn>
          <ConfirmBox
            name="one"
            maxLength={1}
            onChange={onChangeHandler}
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: " 10px",
            }}
          ></ConfirmBox>
          <ConfirmMidBox
            name="two"
            maxLength={1}
            onChange={onChangeHandler}
          ></ConfirmMidBox>
          <ConfirmBox
            name="three"
            maxLength={1}
            onChange={onChangeHandler}
            style={{
              borderTopRightRadius: "10px",
              borderBottomRightRadius: " 10px",
            }}
          ></ConfirmBox>
        </ConfirmCtn>
        <Line></Line>
        <ConfirmCtn>
          <ConfirmBox
            name="four"
            maxLength={1}
            onChange={onChangeHandler}
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: " 10px",
            }}
          ></ConfirmBox>
          <ConfirmMidBox
            name="five"
            maxLength={1}
            onChange={onChangeHandler}
          ></ConfirmMidBox>
          <ConfirmBox
            name="six"
            maxLength={1}
            onChange={onChangeHandler}
            style={{
              borderTopRightRadius: "10px",
              borderBottomRightRadius: " 10px",
            }}
          ></ConfirmBox>
        </ConfirmCtn>
      </ConfirmWrapper>

      <SubmitBtn onClick={onSubmitHandler}>제출 </SubmitBtn>
      <TextBottom>
        고객님의 코드를 찾을 수 없나요? 스팸 폴더를 확인해 보세요!{" "}
      </TextBottom>
    </SignupCtn>
  );
};

const SignupCtn = styled.form`
  height: 680px;
  border: 1px solid none;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  font-size: 50px;
  font-weight: 1000;
`;

const TextMail = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 800px;
  font-size: 24px;
`;

const ConfirmBox = styled.input`
  font-size: 70px;
  text-align: center;
  width: 80px;
  height: 100px;
  border: 2px solid #999;
  :hover {
    border: 3px solid #3782e4;
    transform: scale(1.03);
  }
`;

const ConfirmMidBox = styled.input`
  font-size: 70px;
  text-align: center;
  width: 80px;
  height: 100px;
  border: 1px solid #999;
  border-top: 2px solid #999;
  border-bottom: 2px solid #999;
  :hover {
    border: 3px solid #3782e4;
    transform: scale(1.03);
  }
`;
const Line = styled.div`
  display: inline-block;
  height: 2px;
  content: "";
  text-shadow: none;
  background-color: #999;
  width: 20px;
  margin: 50px 20px 0px 20px;
`;

const ConfirmCtn = styled.div`
  display: flex;
  flex-direction: row;
`;

const ConfirmWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`;

const SubmitBtn = styled.div`
  margin-top: 30px;
  width: 580px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: #4a154b;
  color: white;
  text-align: center;
  padding: 10px 0px 15px;
  font-size: 20px;
  font-weight: 900;
  :hover {
    cursor: pointer;
    background-color: #5d3d5e;
  }
`;

const TextBottom = styled.div`
  color: #454245;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
  width: 800px;
  font-size: 18px;
  font-family: "Noto Sans KR", sans-serif;
`;
export default Confirm;
