import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaDetailQuery } from "generated/graphql";
import { AlertContext } from "context/alert";
import MediaDetail from "./MediaDetail";
import MediaDetailSkeleton from "./MediaDetailSkeleton";
import "./style.css";

interface MediaDetailProps {
  id?: number;
}

const MediaDetailContainer: React.FC = () => {
  const location = useLocation();
  const props = location.state as MediaDetailProps; // Get state passed from other Component on <Link>

  /* Get Data */
  const {
    data: mediaDetail,
    error: detailError,
    loading: detailLoading,
  } = useMediaDetailQuery({
    variables: { id: props.id },
  });

  const alertContext = useContext(AlertContext);

  /* Show error alert */
  useEffect(() => {
    if (detailError) {
      alertContext.setAlert(true);
    }
    // eslint-disable-next-line
  }, [detailError]);

  /* Show skeleton while loading */
  if (detailLoading) {
    return <MediaDetailSkeleton />;
  }

  return <MediaDetail mediaDetail={mediaDetail} />;
};

export default MediaDetailContainer;
