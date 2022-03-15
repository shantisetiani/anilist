import { Row, Col, Skeleton } from "antd";
import "./style.css";

const MediaDetailSkeleton = () => {
  return (
    <div>
      <Row gutter={[24, 12]}>
        <Col
          span={24}
          className="flex-container"
          style={{ marginBottom: "24px" }}
        >
          <Skeleton paragraph={{ rows: 0 }} active />
        </Col>
        <Col xs={24} sm={10} md={8} xl={6}>
          <Skeleton.Image style={{ width: "100%" }} />
          <Skeleton active />
          <Skeleton paragraph={{ rows: 7 }} active />
        </Col>
        <Col xs={24} sm={14} md={16} xl={18}>
          <Skeleton paragraph={{ rows: 10 }} active />
        </Col>
      </Row>
    </div>
  );
};

export default MediaDetailSkeleton;
