import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import RenderRouter, { ROUTES } from "routes";
import { AlertContext } from "context/alert";
import ErrorAlert from "components/ErrorAlert";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  const [isAlertShown, setIsAlertShown] = useState(false);

  /* Hide Error Alert after 3 seconds */
  useEffect(() => {
    if (isAlertShown) {
      setTimeout(() => {
        setIsAlertShown(false);
      }, 3000);
    }
  }, [isAlertShown]);

  const HeaderComponent = () => (
    <Header className="flex-container" style={{ backgroundColor: "#4000c3" }}>
      <Link to={ROUTES.HOME}>
        <h1 className="app-logo">Anilist</h1>
      </Link>
      <Menu theme="dark" mode="horizontal" color="#4000c3">
        <Link to={ROUTES.MEDIA_LIST}>
          <Menu.Item key="menu_list">Menu List</Menu.Item>
        </Link>
      </Menu>
    </Header>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ErrorAlert isShown={isAlertShown} />
      <BrowserRouter>
        <HeaderComponent />
        <Content>
          <AlertContext.Provider
            value={{
              isShown: false,
              setAlert: (isShown: boolean) => {
                setIsAlertShown(isShown);
              },
            }}
          >
            <RenderRouter />
          </AlertContext.Provider>
        </Content>
        <Footer
          style={{
            backgroundColor: "#4000c3",
            color: "white",
            textAlign: "center",
          }}
        >
          Anilist ©2021 Created by Shanti Setiani
        </Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
