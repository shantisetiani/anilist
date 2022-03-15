import React, { useState, useContext, useEffect } from "react";
import { useMediaListQuery, MediaListSort } from "generated/graphql";
import { AlertContext } from "context/alert";
import MediaList, { MediaFilter } from "./MediaList";

const MediaListContainer: React.FC = () => {
  /* Filter's state */
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>({
    sort: MediaListSort.MediaPopularityDesc,
  } as MediaFilter);

  /* Get data */
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

  const alertContext = useContext(AlertContext);

  /* Show error alert */
  useEffect(() => {
    if (listError) {
      alertContext.setAlert(true);
    }
    // eslint-disable-next-line
  }, [listError]);

  return (
    <MediaList
      mediaList={mediaList}
      loading={listLoading}
      mediaFilter={mediaFilter}
      setMediaFilter={setMediaFilter}
    />
  );
};

export default MediaListContainer;
