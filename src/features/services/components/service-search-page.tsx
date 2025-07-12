import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { ServiceSearchFilters } from "./service-search-filters";
import { ServiceSearchResults } from "./service-search-results";
import { ServiceSearchHeader } from "./service-search-header";
import { useInfiniteServiceSearch } from "../hooks/use-infinite-service-search";

export function ServiceSearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        serviceTypeId: "",
        minPrice: "",
        maxPrice: "",
        rating: "",
        university: "",
        city: "",
        state: "",
    });

    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        refetch,
    } = useInfiniteServiceSearch({
        search: searchQuery,
        ...filters,
        limit: 20,
    });

    // Flatten all pages into a single array of services
    const allServices = data?.pages.flatMap(page => page.data?.value || []) || [];
    const totalCount = data?.pages[0]?.data?.size || 0;

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleFilterChange = (newFilters: typeof filters) => {
        setFilters(newFilters);
    };

    const handleClearFilters = () => {
        setFilters({
            serviceTypeId: "",
            minPrice: "",
            maxPrice: "",
            rating: "",
            university: "",
            city: "",
            state: "",
        });
        setSearchQuery("");
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Fixed Header Section */}
            <div className="pt-16">
                <div className="sticky top-16 z-40 bg-background border-b border-border">
                    <ServiceSearchHeader
                        searchQuery={searchQuery}
                        onSearch={handleSearch}
                        resultsCount={totalCount}
                    />
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-1/4">
                            <ServiceSearchFilters
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onClearFilters={handleClearFilters}
                            />
                        </div>

                        {/* Results */}
                        <div className="lg:w-3/4">
                            <ServiceSearchResults
                                services={allServices}
                                isLoading={isLoading}
                                error={error}
                                onRetry={refetch}
                                fetchNextPage={fetchNextPage}
                                hasNextPage={hasNextPage}
                                isFetchingNextPage={isFetchingNextPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
