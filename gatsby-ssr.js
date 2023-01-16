const React = require("react")

exports.onRenderBody = ({setHeadComponents}) => {
    // setPostBodyComponents([
    //     <script key="1" type="text/javascript" src={"propellerAdsScriptInPagePush.js"}/>,
    //     <script key="2" type="text/javascript" src={"propellerAdsScriptVignette.js"}/>
    // ]);
    setHeadComponents([
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6881284677253875" crossorigin="anonymous"></script>
    ])
};