import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";
import { useState } from "react";
import { useServiceTypes } from "../hooks/use-service-types";

interface ServiceSearchFiltersProps {
    filters: {
        serviceTypeId: string;
        minPrice: string;
        maxPrice: string;
        rating: string;
        university: string;
        city: string;
        state: string;
    };
    onFilterChange: (filters: ServiceSearchFiltersProps['filters']) => void;
    onClearFilters: () => void;
}

export function ServiceSearchFilters({ filters, onFilterChange, onClearFilters }: ServiceSearchFiltersProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { data: serviceTypes } = useServiceTypes();

    const handleFilterUpdate = (key: keyof typeof filters, value: string) => {
        onFilterChange({
            ...filters,
            [key]: value,
        });
    };

    const getActiveFiltersCount = () => {
        return Object.values(filters).filter(value => value !== "").length;
    };

    const activeFiltersCount = getActiveFiltersCount();

    return (
        <Card className="p-6 sticky top-24">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-semibold text-foreground">Filters</h3>
                    {activeFiltersCount > 0 && (
                        <Badge variant="secondary" className="ml-2">
                            {activeFiltersCount}
                        </Badge>
                    )}
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="lg:hidden"
                >
                    {isExpanded ? "Hide" : "Show"}
                </Button>
            </div>

            <div className={`space-y-6 ${!isExpanded ? "hidden lg:block" : ""}`}>
                {/* Service Type */}
                <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                        Service Type
                    </Label>
                    <select
                        value={filters.serviceTypeId}
                        onChange={(e) => handleFilterUpdate("serviceTypeId", e.target.value)}
                        className="w-full p-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="">All Types</option>
                        {serviceTypes?.data?.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Price Range */}
                <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                        Price Range
                    </Label>
                    <div className="flex gap-2">
                        <Input
                            type="number"
                            placeholder="Min"
                            value={filters.minPrice}
                            onChange={(e) => handleFilterUpdate("minPrice", e.target.value)}
                            className="flex-1"
                        />
                        <Input
                            type="number"
                            placeholder="Max"
                            value={filters.maxPrice}
                            onChange={(e) => handleFilterUpdate("maxPrice", e.target.value)}
                            className="flex-1"
                        />
                    </div>
                </div>

                {/* Rating */}
                <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                        Minimum Rating
                    </Label>
                    <select
                        value={filters.rating}
                        onChange={(e) => handleFilterUpdate("rating", e.target.value)}
                        className="w-full p-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="">Any Rating</option>
                        <option value="4">4+ Stars</option>
                        <option value="3">3+ Stars</option>
                        <option value="2">2+ Stars</option>
                        <option value="1">1+ Stars</option>
                    </select>
                </div>

                {/* University */}
                <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                        University
                    </Label>
                    <Input
                        type="text"
                        placeholder="Enter university name"
                        value={filters.university}
                        onChange={(e) => handleFilterUpdate("university", e.target.value)}
                    />
                </div>

                {/* Location */}
                <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                        Location
                    </Label>
                    <div className="space-y-2">
                        <Input
                            type="text"
                            placeholder="City"
                            value={filters.city}
                            onChange={(e) => handleFilterUpdate("city", e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="State"
                            value={filters.state}
                            onChange={(e) => handleFilterUpdate("state", e.target.value)}
                        />
                    </div>
                </div>

                {/* Clear Filters */}
                {activeFiltersCount > 0 && (
                    <Button
                        variant="outline"
                        onClick={onClearFilters}
                        className="w-full flex items-center gap-2"
                    >
                        <X className="h-4 w-4" />
                        Clear All Filters
                    </Button>
                )}
            </div>
        </Card>
    );
}
