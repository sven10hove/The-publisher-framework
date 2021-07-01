import { useSWRInfinite } from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const usePaginatedReadings = () => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.has_more) {
      return null;
    }

    if (pageIndex === 0) {
      return '/api/readings';
    }

    return `/api/readings?cursor=${previousPageData.next_cursor}`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const normalizeReadings = data ? data.map((d) => d.data) : [];
  const readings = normalizeReadings ? [].concat(...normalizeReadings) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');

  const isEmpty = data?.[0]?.length === 0;
  const reachedEnd =
    isEmpty || (data && data[data.length - 1]?.has_more === false);

  return { readings, error, isLoadingMore, size, setSize, reachedEnd };
};
