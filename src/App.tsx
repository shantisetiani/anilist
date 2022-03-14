import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Layout, Input, Menu } from "antd";
import RenderRouter, { ROUTES } from "routes";
import { useMediaListQuery, MediaListSort } from "generated/graphql";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;

interface SearchMediaParams {
  path: string;
  goToMediaList: () => void;
}

interface onSearchParams extends SearchMediaParams {
  value: string;
}

function App() {
  const [openMobileSearch, setOpenMobileSearch] = useState(false); // state to show/hide input search (mobile view)

  const {
    data: mediaList,
    error: listError,
    loading: listLoading,
  } = useMediaListQuery({
    variables: { sort: MediaListSort.MediaPopularity },
  });

  // Function to search in the available classes
  const onSearch = ({ value, path, goToMediaList }: onSearchParams) => {
    if (path !== ROUTES.MEDIA_LIST) {
      goToMediaList();
    }
  };

  // Function to render input search class
  const renderSearchClass = ({ path, goToMediaList }: SearchMediaParams) => (
    <Input.Search
      placeholder="Search Media"
      allowClear
      onSearch={(value) => onSearch({ value, path, goToMediaList })}
      className="input-search"
      style={{ width: 200, paddingLeft: "15px" }}
      data-testid="inputSearch"
    />
  );

  // Function to render input search class (mobile view)
  const renderMobileSearchClass = ({
    path,
    goToMediaList,
  }: SearchMediaParams) => (
    <div className="mobile-view mobile-input-search">
      <Input.Search
        placeholder="Cari kelas"
        allowClear
        onSearch={(value) => onSearch({ value, path, goToMediaList })}
        style={{ width: 200, marginTop: "8px" }}
      />
    </div>
  );

  const HeaderComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Function to go to Class List page
    const goToMediaList = () => navigate(ROUTES.MEDIA_LIST);

    return (
      <Header className="flex-container" style={{ backgroundColor: "#4000c3" }}>
        <Link to={ROUTES.MEDIA_LIST}>
          <h1 className="app-logo">Anilist</h1>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          color="#4000c3"
        >
          <Link to={ROUTES.MEDIA_LIST}>
            <Menu.Item key="menu_list">Menu List</Menu.Item>
          </Link>
        </Menu>
      </Header>
    );
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <HeaderComponent />
        <Content>
          <RenderRouter />
        </Content>
        <Footer
          style={{
            backgroundColor: "#000",
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
