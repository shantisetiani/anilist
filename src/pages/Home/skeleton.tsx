import { Row, Col, Skeleton, Card, Divider } from "antd";

const HomeSkeleton = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <h2 style={{ margin: 0 }}>Trends</h2>
          <Divider className="header-divider" />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={12} md={6} xl={4}>
          <Card hoverable={true}>
            <Skeleton.Image style={{ width: "100%" }} />
            <Skeleton paragraph={{ rows: 0 }} active />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h2 style={{ margin: "48px 0 0" }}>Airing Schedule</h2>
          <Divider className="header-divider" />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={12} md={6} xl={4}>
          <Card hoverable={true}>
            <Skeleton.Image style={{ width: "100%" }} />
            <Skeleton paragraph={{ rows: 0 }} active />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h2 style={{ margin: "48px 0 0" }}>Recommendation</h2>
          <Divider className="header-divider" />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={12} md={6} xl={4}>
          <Card hoverable={true}>
            <Skeleton.Image style={{ width: "100%" }} />
            <Skeleton paragraph={{ rows: 0 }} active />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeSkeleton;
