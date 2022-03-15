import React, { Dispatch, SetStateAction } from "react";
import {
  MediaListQuery,
  MediaListSort,
  MediaType,
  MediaListStatus,
} from "generated/graphql";
import { Row, Col, Table, Spin, Card, Select } from "antd";
import { capitalizeFirstLetter } from "utilities/string";
import { columns } from "./column";

interface MediaListProps {
  mediaList: MediaListQuery | undefined;
  loading: boolean;
  mediaFilter: MediaFilter;
  setMediaFilter: Dispatch<SetStateAction<MediaFilter>>;
}

export interface MediaFilter {
  sort: MediaListSort | null;
  type: MediaType;
  status: MediaListStatus;
}

const MediaList: React.FC<MediaListProps> = ({
  mediaList,
  loading,
  mediaFilter,
  setMediaFilter,
}) => {
  const statusList = Object.values(MediaListStatus);

  /* Handle media type filter on change */
  const onMediaTypeChange = (value: MediaType) => {
    setMediaFilter({ ...mediaFilter, sort: null, type: value });
  };

  /* Handle media status filter on change */
  const onMediaStatusChange = (value: MediaListStatus) => {
    setMediaFilter({ ...mediaFilter, sort: null, status: value });
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
              <Select.Option value={status} key={status}>
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
          {loading ? (
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
