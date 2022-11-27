import React from "react";

const ColorfulMessage1 = (props) => {
  //分割代入をしている。colorとchildrenのところのpropsを省略できる
  const { color, children } = props;
  const contentStyle = {
    // 元は"color: props.color"だったが省略できる
    color,
    frontSize: "18px",
  };

  return (
    // タグの閉じタグはchildrenで受け取る
    <p style={contentStyle}>{children}</p>
  );
};

export default ColorfulMessage1;
