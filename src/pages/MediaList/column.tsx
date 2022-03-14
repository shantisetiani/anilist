import { Media, MediaList } from "generated/graphql";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";

export const columns = [
  {
    title: "No",
    key: "no",
    render: (data: MediaList, row: any, index: number) => index + 1,
  },
  {
    title: "Title",
    dataIndex: "media",
    key: "title",
    render: (media: Media, row: any) => (
      <Link to={ROUTES.MEDIA_DETAIL} state={{ id: row.id }}>
        {media.title?.userPreferred}
      </Link>
    ),
  },
  {
    title: "Type",
    dataIndex: "media",
    key: "type",
    render: (media: Media) => media.type,
  },
  {
    title: "Genre",
    dataIndex: "media",
    key: "genre",
    render: (media: Media) => media.genres?.join(", "),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Episode",
    key: "episode",
    render: (row: MediaList) =>
      `${row.progress}/${row?.media?.episodes ? row.media.episodes : "?"}`,
  },
];
