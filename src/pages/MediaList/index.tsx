import React from "react";
import { useMediaListQuery, MediaListSort } from "generated/graphql";
import { Row, Col, Table, Spin } from "antd";
import { columns } from "./column";

const MediaList = () => {
  const {
    data: mediaList,
    error: listError,
    loading: listLoading,
  } = useMediaListQuery({
    variables: { sort: MediaListSort.MediaPopularityDesc },
  });

  console.log(mediaList?.MediaList);

  return (
    <Row>
      <Col span={24}>
        <h1>Media List</h1>
      </Col>
      <Col span={24}>
        {listLoading ? (
          <div className="text-center">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={mediaList?.MediaList ? [mediaList.MediaList] : []}
            bordered={true}
          />
        )}
      </Col>
    </Row>
  );
};

export default MediaList;
