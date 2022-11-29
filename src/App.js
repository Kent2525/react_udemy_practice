import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessage1 from "./components/ColorfulMessage1";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    // !マークで現在の設定を逆に変更する効果がある
    setFaceShowFlag(!faceShowFlag);
  }

  useEffect(() => {  
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true); //faceShowFlagがfalseなら右辺にいく
      } else {
        faceShowFlag && setFaceShowFlag(false); //faceShowFlagがfalseなら右辺にいく
      }
    }
  }, [num]);
  
  return (
    <>
      {/* 波括弧の外側がJSで内側はJSのオブジェクトという意味 */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* パターン1:それぞれ変数名で渡すやり方 */}
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です！" />
      {/* パターン2:タグで囲った中身をchildrenを受け取る方法 */}
      <ColorfulMessage1 color="blue">お元気ですか？</ColorfulMessage1>

      {/* 波括弧{}を入れるとJavascriptとして認識される */}
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

export default App;
