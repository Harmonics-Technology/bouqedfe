import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/api/client";

export function useServiceTypes() {
    return useQuery({
        queryKey: ["service-types"],
        queryFn: async () => {
            return await apiClient.business.getServiceTypes({});
        },
        staleTime: 10 * 60 * 1000, // 10 minutes
        refetchOnWindowFocus: false,
    });
}
