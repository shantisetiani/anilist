import { gql } from "@apollo/client";

export const MEDIA_LIST = gql`
  query MediaList(
    $sort: [MediaListSort]
    $type: MediaType
    $status: MediaListStatus
  ) {
    MediaList(sort: $sort, type: $type, status: $status) {
      id
      userId
      mediaId
      progress
      status
      score
      progress
      media {
        title {
          userPreferred
        }
        type
        genres
        episodes
      }
    }
  }
`;

export const MEDIA_DETAIL = gql`
  query MediaDetail($id: Int) {
    Media(id: $id) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      type
      format
      status
      description
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      episodes
      duration
      chapters
      volumes
      countryOfOrigin
      tags {
        id
        name
      }
      trailer {
        id
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      genres
      averageScore
      popularity
      characters {
        nodes {
          id
          image {
            large
            medium
          }
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          favourites
        }
      }
      staff {
        nodes {
          id
          image {
            large
            medium
          }
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          primaryOccupations
          favourites
        }
      }
      studios {
        nodes {
          id
          name
        }
      }
      isAdult
      airingSchedule {
        edges {
          id
        }
      }
      rankings {
        id
        type
        allTime
        rank
      }
      reviews {
        nodes {
          id
          summary
          body
          user {
            id
            name
          }
          userRating
          ratingAmount
          score
          createdAt
          updatedAt
        }
      }
      externalLinks {
        id
      }
      siteUrl
    }
  }
`;

export const MEDIA_TREND = gql`
  query MediaTrend($sort: [MediaTrendSort]) {
    MediaTrend(sort: $sort) {
      trending
      media {
        id
        coverImage {
          extraLarge
          large
          medium
          color
        }
        title {
          romaji
          english
          native
          userPreferred
        }
      }
    }
  }
`;

export const RECOMMENDATION = gql`
  query Recommendation($sort: [RecommendationSort]) {
    Recommendation(sort: $sort) {
      id
      media {
        id
        coverImage {
          extraLarge
          large
          medium
          color
        }
        title {
          romaji
          english
          native
          userPreferred
        }
      }
      mediaRecommendation {
        id
        coverImage {
          extraLarge
          large
          medium
          color
        }
        title {
          romaji
          english
          native
          userPreferred
        }
      }
    }
  }
`;

export const AIRING_SCHEDULE = gql`
  query AiringSchedule($notYetAired: Boolean) {
    AiringSchedule(notYetAired: $notYetAired) {
      id
      airingAt
      timeUntilAiring
      episode
      media {
        id
        coverImage {
          extraLarge
          large
          medium
          color
        }
        title {
          romaji
          english
          native
          userPreferred
        }
      }
    }
  }
`;
