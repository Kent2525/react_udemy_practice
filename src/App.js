import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessage1 from "./components/ColorfulMessage1";

const App = () => {
  const onclickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
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
      <button onclick={onclickCountUp}>カウントアップ!</button>
      <p>{num}</p>
    </>
  );
};

export default App;
