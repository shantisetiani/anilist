import React from "react";
import { useLocation } from "react-router-dom";
import { useMediaDetailQuery } from "generated/graphql";
import ErrorPage from "pages/ErrorPage";
import MediaDetail from "./MediaDetail";
import MediaDetailSkeleton from "./MediaDetailSkeleton";
import "./style.css";

interface MediaDetailProps {
  id?: number;
}

const MediaDetailContainer: React.FC = () => {
  const location = useLocation();
  const props = location.state as MediaDetailProps;

  const {
    data: mediaDetail,
    error: detailError,
    loading: detailLoading,
  } = useMediaDetailQuery({
    variables: { id: props.id },
  });

  if (detailError) {
    return <ErrorPage />;
  }

  if (detailLoading) {
    return <MediaDetailSkeleton />;
  }

  return <MediaDetail mediaDetail={mediaDetail} />;
};

export default MediaDetailContainer;
