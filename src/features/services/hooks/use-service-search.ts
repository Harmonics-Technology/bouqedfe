import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/api/client";

interface UseServiceSearchParams {
    search?: string;
    serviceTypeId?: string;
    minPrice?: string;
    maxPrice?: string;
    rating?: string;
    university?: string;
    city?: string;
    state?: string;
    offset?: number;
    limit?: number;
}

export function useServiceSearch(params: UseServiceSearchParams) {
    return useQuery({
        queryKey: ["services", "search", params],
        queryFn: async () => {
            const searchParams = {
                offset: params.offset || 0,
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
        enabled: true,
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false,
    });
}
