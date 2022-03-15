import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Image, Card, Tabs, Divider, Tag } from "antd";
import { useMediaDetailQuery } from "generated/graphql";
import { toDateHourString, toMonthString } from "utilities/date";
import MediaDetailSkeleton from "./skeleton";
import "./style.css";

interface MediaDetailProps {
  id?: number;
}

const MediaDetail = () => {
  const location = useLocation();
  const props = location.state as MediaDetailProps;

  const {
    data: mediaDetail,
    error: detailError,
    loading: detailLoading,
  } = useMediaDetailQuery({
    variables: { id: props.id },
  });

  if (detailLoading) {
    return <MediaDetailSkeleton />;
  }

  const ratedRank = mediaDetail?.Media?.rankings?.find(
    (rank) => rank?.allTime && rank.type === "RATED"
  );

  const popularRank = mediaDetail?.Media?.rankings?.find(
    (rank) => rank?.allTime && rank.type === "POPULAR"
  );

  const renderDetails = () =>
    mediaDetail?.Media && (
      <>
        <Card
          style={{
            marginBottom: "32px",
            border: "1px solid #d7d7d7",
            backgroundColor: "#f1f0f0",
          }}
        >
          <Row>
            <Col xs={6} className="text-center highlight-card-content">
              <div className="small-title">Score</div>
              <div className="hightlited-content">
                {mediaDetail.Media.averageScore || "-"}
              </div>
            </Col>
            <Col xs={6} className="text-center highlight-card-content">
              <div className="small-title">Rated Rank</div>
              <div className="hightlited-content">
                {ratedRank ? `#${ratedRank.rank}` : "-"}
              </div>
            </Col>
            <Col xs={6} className="text-center highlight-card-content">
              <div className="small-title">Popular Rank</div>
              <div className="hightlited-content">
                {popularRank ? `#${popularRank.rank}` : "-"}
              </div>
            </Col>
            <Col xs={6} className="text-center highlight-card-content">
              <div className="small-title">Popularity</div>
              <div className="hightlited-content">
                {mediaDetail.Media.popularity || "-"}
              </div>
            </Col>
          </Row>
        </Card>
        <h3 style={{ margin: 0 }}>Description</h3>
        <Divider className="header-divider" />
        <p
          dangerouslySetInnerHTML={{
            __html: mediaDetail.Media.description || "",
          }}
        />
        <p style={{ marginTop: "80px" }}>
          Tags:
          <br />
          {mediaDetail.Media.tags?.map((tag) => (
            <Tag color="geekblue" key={tag?.id}>
              {tag?.name.toUpperCase()}
            </Tag>
          ))}
        </p>
      </>
    );

  const renderCharactersAndStaff = () => (
    <>
      <h3 style={{ margin: 0 }}>Characters</h3>
      <Divider className="header-divider" />
      {mediaDetail?.Media?.characters?.nodes?.map((character) => (
        <Row gutter={16}>
          <Col xs={8} md={4} xl={2}>
            <Image width="100%" src={character?.image?.medium || " "} />
          </Col>
          <Col xs={16} md={20} xl={22}>
            <div>
              <b>{character?.name?.full}</b>
            </div>
            <div className="grayed-caption">
              {character?.favourites} Favorites
            </div>
          </Col>
          <Divider className="row-divider" />
        </Row>
      ))}
      <h3 style={{ margin: "40px 0 0" }}>Staff</h3>
      <Divider className="header-divider" />
      {mediaDetail?.Media?.staff?.nodes?.map((staff) => (
        <Row gutter={16}>
          <Col xs={8} md={4} xl={2}>
            <Image width="100%" src={staff?.image?.medium || " "} />
          </Col>
          <Col xs={16} md={20} xl={22}>
            <div>
              <b>{staff?.name?.full}</b>
            </div>
            <div>{staff?.primaryOccupations?.join(", ")}</div>
            <div className="grayed-caption">{staff?.favourites} Favorites</div>
          </Col>
          <Divider className="row-divider" />
        </Row>
      ))}
    </>
  );

  const renderReviews = () => (
    <>
      <h3 style={{ margin: 0 }}>Reviews</h3>
      <Divider className="header-divider" />
      {mediaDetail?.Media?.reviews?.nodes &&
      mediaDetail.Media.reviews.nodes.length > 0 ? (
        mediaDetail.Media.reviews.nodes.map((review) => (
          <>
            {review?.user && (
              <>
                <Row>
                  <Col xs={12} sm={16} md={18}>
                    <div>
                      <strong>{review.user.name}</strong>
                    </div>
                    <div className="grayed-caption">
                      <b>{review.ratingAmount}</b>&nbsp;people found this review
                      helpful
                    </div>
                  </Col>
                  <Col xs={12} sm={8} md={6}>
                    <div className="float-right">
                      {toDateHourString(review.createdAt)}
                    </div>
                    <div className="float-right">Score: {review.score}</div>
                  </Col>
                </Row>
                <Divider
                  style={{
                    margin: "12px 0",
                  }}
                />
              </>
            )}
            <Row>
              <Col span={24}>
                <p>
                  <b>{review?.summary}</b>
                </p>
                <p className="ellipsis-paragraph">{review?.body}</p>
              </Col>
            </Row>
            {review?.updatedAt && (
              <Row>
                <Col span={24} className="edited-at text-right">
                  Edited at: {toDateHourString(review.updatedAt)}
                </Col>
              </Row>
            )}
            <Divider className="row-divider" style={{ margin: "24px 0" }} />
          </>
        ))
      ) : (
        <div>No reviews yet.</div>
      )}
    </>
  );

  const endDate = mediaDetail?.Media?.endDate?.month
    ? `${toMonthString(mediaDetail.Media.endDate.month)} ${
        mediaDetail.Media.endDate.day
      }, ${mediaDetail.Media.endDate.year}`
    : "?";

  return (
    <div>
      {mediaDetail?.Media && (
        <Row gutter={[24, 12]}>
          <Col
            span={24}
            className="flex-container"
            style={{ marginBottom: "24px" }}
          >
            <h1 style={{ margin: 0 }}>
              {mediaDetail.Media.title?.userPreferred}
            </h1>
            {mediaDetail.Media.isAdult && (
              <span className="adult-badge">18+</span>
            )}
          </Col>
          <Col xs={24} sm={10} md={8} xl={6}>
            <Image
              width="100%"
              src={mediaDetail.Media.coverImage?.large || ""}
            />
            {mediaDetail.Media.title && (
              <Row>
                <Col span={24}>
                  <h4 style={{ margin: "12px 0 0" }}>Alternative Titles</h4>
                </Col>
                <Divider style={{ margin: "0 0 8px" }} />
                <Col xs={6} xl={5}>
                  <b>Original</b>
                </Col>
                <Col xs={18} xl={19}>
                  : {mediaDetail.Media.title.native}
                </Col>
                <Col xs={6} xl={5}>
                  <b>Romaji</b>
                </Col>
                <Col xs={18} xl={19}>
                  : {mediaDetail.Media.title.romaji}
                </Col>
                <Col xs={6} xl={5}>
                  <b>English</b>
                </Col>
                <Col xs={18} xl={19}>
                  : {mediaDetail.Media.title.english}
                </Col>
              </Row>
            )}
            <Row>
              <Col span={24}>
                <h4 style={{ margin: "12px 0 0" }}>Information</h4>
              </Col>
              <Divider style={{ margin: "0 0 8px" }} />
              <Col span={24}>
                <b>Type: </b>
                {mediaDetail.Media.type}
              </Col>
              <Col span={24}>
                <b>Genres: </b>
                {mediaDetail.Media.genres?.join(", ")}
              </Col>
              <Col span={24}>
                <b>Status: </b>
                {mediaDetail.Media.status}
              </Col>
              <Col span={24}>
                <b>Aired: </b>
                {mediaDetail.Media.startDate?.month
                  ? `${toMonthString(mediaDetail.Media.startDate.month)} ${
                      mediaDetail.Media.startDate.day
                    }, ${mediaDetail.Media.startDate.year} to ${endDate}`
                  : "?"}
              </Col>
              <Col span={24}>
                <b>Episodes: </b>
                {mediaDetail.Media.episodes}
              </Col>
              <Col span={24}>
                <b>Duration: </b>
                {mediaDetail.Media.duration} min. per episodes
              </Col>
              <Col span={24}>
                <b>Studios: </b>
                {mediaDetail.Media.studios?.nodes
                  ?.map((studio) => studio?.name)
                  .join(", ")}
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={14} md={16} xl={18}>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Details" key="details">
                {renderDetails()}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Characters & Staff" key="character">
                {renderCharactersAndStaff()}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Review" key="review">
                {renderReviews()}
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default MediaDetail;
