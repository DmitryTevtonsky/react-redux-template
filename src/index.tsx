import "./libs/i18n";
import "antd/dist/antd.css";

import { ConfigProvider } from "antd";
import { Locale } from "antd/es/locale-provider";
import { PersistGate } from "redux-persist/integration/react";
import { Translation } from "react-i18next";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import antdEn from "antd/lib/locale-provider/en_GB";
import antdRu from "antd/lib/locale-provider/ru_RU";

import { Provider } from "react-redux";

import { Core } from "./features/core";
import { persistor, store } from "./store";

const antd: Record<string, Locale> = { ru: antdRu, en: antdEn };

ReactDOM.render(
  <Suspense fallback={null}>
    <Translation>
      {(t, { i18n }) => {
        return (
          <ConfigProvider
            getPopupContainer={() =>
              document.getElementById("root-modal") || document.body
            }
            locale={antd[i18n.language]}
            prefixCls={process.env.REACT_APP_ANT_PREFIX}
          >
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Core />
              </PersistGate>
            </Provider>
          </ConfigProvider>
        );
      }}
    </Translation>
  </Suspense>,
  document.getElementById("root")
);
