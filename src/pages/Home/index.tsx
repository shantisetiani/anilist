import React, { useContext, useEffect } from "react";
import {
  useMediaTrendQuery,
  MediaTrendSort,
  useRecommendationQuery,
  RecommendationSort,
  useAiringScheduleQuery,
} from "generated/graphql";
import { AlertContext } from "context/alert";
import Home from "./Home";
import HomeSkeleton from "./HomeSkeleton";
import "./style.css";

const HomeContainer: React.FC = () => {
  /* Get Datas - Start */
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
  /* Get Datas - End */

  const alertContext = useContext(AlertContext);

  /* Show error alert */
  useEffect(() => {
    if (mediaTrendError || airingError || recommendationError) {
      alertContext.setAlert(true);
    }
    // eslint-disable-next-line
  }, [mediaTrendError, airingError, recommendationError]);

  /* Show skeleton while loading */
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
