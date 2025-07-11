import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { ServiceSearchFilters } from "./service-search-filters";
import { ServiceSearchResults } from "./service-search-results";
import { ServiceSearchHeader } from "./service-search-header";
import { useServiceSearch } from "../hooks/use-service-search";

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
        data: servicesData,
        isLoading,
        error,
        refetch,
    } = useServiceSearch({
        search: searchQuery,
        ...filters,
        offset: 0,
        limit: 20,
    });

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

            <div className="pt-16">
                <ServiceSearchHeader
                    searchQuery={searchQuery}
                    onSearch={handleSearch}
                    resultsCount={servicesData?.data?.size || 0}
                />

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
                                services={servicesData?.data?.value || []}
                                isLoading={isLoading}
                                error={error}
                                onRetry={refetch}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
