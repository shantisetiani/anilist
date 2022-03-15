import React, { useState } from "react";
import {
  useMediaListQuery,
  MediaListSort,
  MediaType,
  MediaListStatus,
} from "generated/graphql";
import { Row, Col, Table, Spin, Card, Select } from "antd";
import { capitalizeFirstLetter } from "utilities/string";
import ErrorPage from "pages/ErrorPage";
import { columns } from "./column";

interface MediaFilter {
  sort: MediaListSort;
  type: MediaType;
  status: MediaListStatus;
}

const MediaList = () => {
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>({
    sort: MediaListSort.MediaPopularityDesc,
  } as MediaFilter);
  const {
    data: mediaList,
    error: listError,
    loading: listLoading,
  } = useMediaListQuery({
    variables: {
      sort: mediaFilter.sort,
      type: mediaFilter.type,
      status: mediaFilter.status,
    },
  });

  if (listError) {
    return <ErrorPage />;
  }

  console.log("mediaList", mediaList);

  const statusList = Object.values(MediaListStatus);

  const onMediaTypeChange = (value: MediaType) => {
    console.log("type: ", value);
    setMediaFilter({ ...mediaFilter, type: value });
  };

  const onMediaStatusChange = (value: MediaListStatus) => {
    console.log("status: ", value);
    setMediaFilter({ ...mediaFilter, status: value });
  };

  const renderFilter = () => (
    <Card>
      <Row gutter={16}>
        <Col span={12}>
          <div>Media Type</div>
          <Select
            style={{ width: "100%" }}
            placeholder="Select Media Type"
            onChange={onMediaTypeChange}
          >
            <Select.Option value={MediaType.Anime}>Anime</Select.Option>
            <Select.Option value={MediaType.Manga}>Manga</Select.Option>
          </Select>
        </Col>
        <Col span={12}>
          <div>Media Status</div>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Select Media Status"
            onChange={onMediaStatusChange}
          >
            {statusList.map((status) => (
              <Select.Option value={status}>
                {capitalizeFirstLetter(status)}
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
    </Card>
  );

  return (
    <div>
      <Row>
        <Col span={24}>
          <h1>Media List</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>{renderFilter()}</Col>
      </Row>
      <Row style={{ marginTop: "24px" }}>
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
              scroll={{ x: "auto" }}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MediaList;
