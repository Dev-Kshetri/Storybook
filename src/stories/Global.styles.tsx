import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
@import url(//db.onlinewebfonts.com/c/af33965373026b87eca335817c5f90b7?family=QNJFWV+SantanderText-Light);
@font-face {
  font-family: "SantanderText-Light";
  src: url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.eot");
  src: url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.eot?#iefix")
      format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.woff2")
      format("woff2"),
    url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.woff")
      format("woff"),
    url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.ttf")
      format("truetype"),
    url("//db.onlinewebfonts.com/t/af33965373026b87eca335817c5f90b7.svg#QNJFWV+SantanderText-Light")
      format("svg");
}
*,**,::before,::after{
  font-family: "SantanderText-Light";
}

html{
  font-family: "SantanderText-Light";
}
`;