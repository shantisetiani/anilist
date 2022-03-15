import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/react-testing";
import { useMediaListQuery } from "generated/graphql";
import MediaList from "pages/MediaList/MediaList";

const mocks: any = [
  {
    request: {
      query: useMediaListQuery,
      variables: {
        type: "ANIME",
        status: "PLANNING",
      },
    },
    result: {
      data: {
        mediaList: { id: "1", title: "Shingeki no Kyojin" },
      },
    },
  },
];

describe("MediaList", () => {
  it("Should render loading state", async () => {
    const mockMediaFilter = {} as any;
    const mockSetMediaFilter = {} as any;

    const component = TestRenderer.create(
      <MockedProvider mocks={[]}>
        <MediaList
          mediaList={{}}
          loading={false}
          mediaFilter={mockMediaFilter}
          setMediaFilter={mockSetMediaFilter}
        />
      </MockedProvider>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
