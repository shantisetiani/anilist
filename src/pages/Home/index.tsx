import React from "react";
import {
  useMediaTrendQuery,
  MediaTrendSort,
  useRecommendationQuery,
  RecommendationSort,
  useAiringScheduleQuery,
} from "generated/graphql";
import ErrorPage from "pages/ErrorPage";
import Home from "./Home";
import HomeSkeleton from "./HomeSkeleton";
import "./style.css";

const HomeContainer: React.FC = () => {
  const {
    data: mediaTrend,
    error: mediaTrendError,
    loading: mediaTrendLoading,
  } = useMediaTrendQuery({
    variables: { sort: MediaTrendSort.Trending },
  });

  const {
    data: airing,
    error: airingError,
    loading: airingLoading,
  } = useAiringScheduleQuery({
    variables: { notYetAired: true },
  });

  const {
    data: recommendation,
    error: recommendationError,
    loading: recommendationLoading,
  } = useRecommendationQuery({
    variables: { sort: RecommendationSort.RatingDesc },
  });

  if (mediaTrendError || airingError || recommendationError) {
    return <ErrorPage />;
  }

  if (mediaTrendLoading || airingLoading || recommendationLoading) {
    return <HomeSkeleton />;
  }

  return (
    <Home
      mediaTrend={mediaTrend}
      airing={airing}
      recommendation={recommendation}
    />
  );
};

export default HomeContainer;
