const React = require("react")

exports.onRenderBody = ({setPostBodyComponents}) => {
    setPostBodyComponents([
        <script key="1" type="text/javascript" src={"propellerAdsScriptInPagePush.js"}/>,
        <script key="2" type="text/javascript" src={"propellerAdsScriptVignette.js"}/>
    ]);
};