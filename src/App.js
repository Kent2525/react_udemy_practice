import React from "react";

const App = () => {
    const onclickButton = () => alert();
    const contentStyle = {
        color: 'blue',
        frontSize: '18px'
    };
    return (
        <>
        <h1 style={{ color: 'red'}}>こんにちは</h1>
        <p style={contentStyle}>おはよう</p>
        {/* 波括弧{}を入れるとJavascriptとして認識される */}
        <button onclick={onclickButton}>ボタン</button>
        </>
    );
};

export default App;