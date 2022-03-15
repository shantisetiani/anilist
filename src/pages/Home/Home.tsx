import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Divider } from "antd";
import { ROUTES } from "routes";
import {
  MediaTrendQuery,
  AiringScheduleQuery,
  RecommendationQuery,
} from "generated/graphql";
import { toDateHourString } from "utilities/date";

interface HomeProps {
  mediaTrend: MediaTrendQuery | undefined;
  airing: AiringScheduleQuery | undefined;
  recommendation: RecommendationQuery | undefined;
}

const Home: React.FC<HomeProps> = ({ mediaTrend, airing, recommendation }) => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <h2 style={{ margin: 0 }}>Trends</h2>
          <Divider className="header-divider" />
        </Col>
      </Row>
      <Row gutter={24}>
        {mediaTrend?.MediaTrend && (
          <Col xs={12} md={6} xl={4}>
            <Link
              to={ROUTES.MEDIA_DETAIL}
              state={{ id: mediaTrend.MediaTrend.media?.id }}
            >
              <Card hoverable={true}>
                <img
                  src={
                    mediaTrend.MediaTrend.media?.coverImage?.extraLarge || ""
                  }
                  className="img-full"
                />
                <div className="media-title">
                  {mediaTrend.MediaTrend.media?.title?.userPreferred}
                </div>
              </Card>
            </Link>
          </Col>
        )}
      </Row>
      <Row>
        <Col span={24}>
          <h2 style={{ margin: "48px 0 0" }}>Airing Schedule</h2>
          <Divider className="header-divider" />
        </Col>
      </Row>
      <Row gutter={24}>
        {airing?.AiringSchedule && (
          <Col xs={12} md={6} xl={4}>
            <p style={{ fontSize: "20px", fontWeight: "500" }}>
              {toDateHourString(airing.AiringSchedule.airingAt)}
            </p>
            <Link
              to={ROUTES.MEDIA_DETAIL}
              state={{ id: airing.AiringSchedule.media?.id }}
            >
              <Card hoverable={true}>
                <img
                  src={
                    airing.AiringSchedule.media?.coverImage?.extraLarge || ""
                  }
                  className="img-full"
                />
                <div className="media-title">
                  {airing.AiringSchedule.media?.title?.userPreferred}
                </div>
                <div>Episode {airing.AiringSchedule.episode || "?"}</div>
              </Card>
            </Link>
          </Col>
        )}
      </Row>
      <Row>
        <Col span={24}>
          <h2 style={{ margin: "48px 0 0" }}>Recommendation</h2>
          <Divider className="header-divider" />
        </Col>
      </Row>
      <Row gutter={24}>
        {recommendation?.Recommendation?.media && (
          <Col xs={12} md={6} xl={4}>
            <Link
              to={ROUTES.MEDIA_DETAIL}
              state={{ id: recommendation.Recommendation.media.id }}
            >
              <Card hoverable={true}>
                <img
                  src={
                    recommendation.Recommendation.media.coverImage
                      ?.extraLarge || ""
                  }
                  className="img-full"
                />
                <div className="media-title">
                  {recommendation.Recommendation.media.title?.userPreferred}
                </div>
              </Card>
            </Link>
          </Col>
        )}
        {recommendation?.Recommendation?.mediaRecommendation && (
          <Col xs={12} md={6} xl={4}>
            <Link
              to={ROUTES.MEDIA_DETAIL}
              state={{
                id: recommendation.Recommendation.mediaRecommendation.id,
              }}
            >
              <Card hoverable={true}>
                <img
                  src={
                    recommendation.Recommendation.mediaRecommendation.coverImage
                      ?.extraLarge || ""
                  }
                  className="img-full"
                />
                <div className="media-title">
                  {
                    recommendation.Recommendation.mediaRecommendation.title
                      ?.userPreferred
                  }
                </div>
              </Card>
            </Link>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Home;
