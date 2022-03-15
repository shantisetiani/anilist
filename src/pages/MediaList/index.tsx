import React, { useState } from "react";
import { useMediaListQuery, MediaListSort } from "generated/graphql";
import ErrorPage from "pages/ErrorPage";
import MediaList, { MediaFilter } from "./MediaList";

const MediaListContainer: React.FC = () => {
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>({
    sort: MediaListSort.MediaPopularityDesc,
  } as MediaFilter);
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

  if (listError) {
    return <ErrorPage />;
  }

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
