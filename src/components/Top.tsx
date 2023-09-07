"use client";

import Header from "./Header";
import Main from "./Main";
import Provider from "./Provider";

const Top = () => {
  return (
    <>
      <Provider>
        <Header />
        <Main />
      </Provider>
    </>
  );
};

export default Top;
