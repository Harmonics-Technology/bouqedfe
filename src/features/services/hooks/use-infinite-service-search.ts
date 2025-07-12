import { useInfiniteQuery } from "@tanstack/react-query";
import { apiClient } from "@/api/client";

interface UseInfiniteServiceSearchParams {
    search?: string;
    serviceTypeId?: string;
    minPrice?: string;
    maxPrice?: string;
    rating?: string;
    university?: string;
    city?: string;
    state?: string;
    limit?: number;
}

export function useInfiniteServiceSearch(params: UseInfiniteServiceSearchParams) {
    return useInfiniteQuery({
        queryKey: ["services", "search", "infinite", params],
        queryFn: async ({ pageParam = 0 }) => {
            const searchParams = {
                offset: pageParam,
                limit: params.limit || 20,
                ...(params.search && { search: params.search }),
                ...(params.serviceTypeId && { serviceTypeId: params.serviceTypeId }),
                ...(params.minPrice && { minPrice: Number(params.minPrice) }),
                ...(params.maxPrice && { maxPrice: Number(params.maxPrice) }),
                ...(params.rating && { rating: Number(params.rating) }),
                ...(params.university && { university: params.university }),
                ...(params.city && { city: params.city }),
                ...(params.state && { state: params.state }),
            };

            return await apiClient.business.listServices(searchParams);
        },
        getNextPageParam: (lastPage, allPages) => {
            const limit = params.limit || 20;
            const currentData = lastPage.data?.value || [];

            // If the current page has fewer items than the limit, we've reached the end
            if (currentData.length < limit) {
                return undefined;
            }

            // Check if there's a next page using the nextOffset or next link
            const nextOffset = lastPage.data?.nextOffset;
            const hasNext = lastPage.data?.next;

            // If there's a nextOffset, use it; otherwise check if there's a next link
            if (nextOffset !== null && nextOffset !== undefined) {
                return nextOffset;
            }

            // If there's a next link but no nextOffset, calculate the next offset
            if (hasNext) {
                const currentOffset = allPages.length * limit;
                return currentOffset;
            }

            // No more pages
            return undefined;
        },
        initialPageParam: 0,
        enabled: true,
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false,
    });
}
