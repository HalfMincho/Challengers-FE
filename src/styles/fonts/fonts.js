import { createGlobalStyle } from "styled-components";
import NotoSansKR_Light from "./NotoSansKR-Light.woff";
import NotoSansKR_Regular from "./NotoSansKR-Regular.woff";
import NotoSansKR_Medium from "./NotoSansKR-Medium.woff";
import NotoSansKR_Bold from "./NotoSansKR-Bold.woff";
import NotoSansKR_Black from "./NotoSansKR-Black.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Noto Sans KR';
        src: local("Noto Sans KR Light"),
        url(${NotoSansKR_Light}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Noto Sans KR';
        src: local("Noto Sans KR Regular"),
        url(${NotoSansKR_Regular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Noto Sans KR';
        src: local("Noto Sans KR Medium"),
        url(${NotoSansKR_Medium}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Noto Sans KR';
        src: local("Noto Sans KR Bold"),
        url(${NotoSansKR_Bold}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Noto Sans KR';
        src: local("Noto Sans KR Black"),
        url(${NotoSansKR_Black}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;