import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/api/client";

export function useServiceDetail(serviceId: string) {
    return useQuery({
        queryKey: ["service", serviceId],
        queryFn: async () => {
            const response = await apiClient.business.getServiceById({
                id: serviceId,
            });
            return response.data;
        },
        enabled: !!serviceId,
    });
}

export function useServiceReviews(serviceId: string, limit: number = 10) {
    return useQuery({
        queryKey: ["service-reviews", serviceId, limit],
        queryFn: async () => {
            const response = await apiClient.review.getReviews({
                serviceId,
                limit,
                offset: 0,
            });
            return response.data?.value || [];
        },
        enabled: !!serviceId,
    });
}
