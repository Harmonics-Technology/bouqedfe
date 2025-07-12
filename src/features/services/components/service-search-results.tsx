import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Heart, AlertCircle, Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ServiceView } from "@/api/models/ServiceView";

interface ServiceSearchResultsProps {
    services: ServiceView[];
    isLoading: boolean;
    error: any;
    onRetry: () => void;
    fetchNextPage?: () => void;
    hasNextPage?: boolean;
    isFetchingNextPage?: boolean;
}

export function ServiceSearchResults({
    services,
    isLoading,
    error,
    onRetry,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
}: ServiceSearchResultsProps) {
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const isRequestingRef = useRef(false);

    // Intersection Observer for infinite scroll
    useEffect(() => {
        if (!fetchNextPage || !hasNextPage || isFetchingNextPage || isRequestingRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage && !isRequestingRef.current) {
                    isRequestingRef.current = true;
                    fetchNextPage();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '100px' // Trigger 100px before the element comes into view
            }
        );

        const currentRef = loadMoreRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    // Reset the requesting flag when fetching completes or when hasNextPage changes to false
    useEffect(() => {
        if (!isFetchingNextPage || !hasNextPage) {
            isRequestingRef.current = false;
        }
    }, [isFetchingNextPage, hasNextPage]);
    if (isLoading) {
        return (
            <div className="space-y-6">
                {[...Array(6)].map((_, index) => (
                    <Card key={index} className="p-6 animate-pulse">
                        <div className="flex gap-4">
                            <div className="w-24 h-24 bg-muted rounded-lg"></div>
                            <div className="flex-1 space-y-3">
                                <div className="h-4 bg-muted rounded w-3/4"></div>
                                <div className="h-3 bg-muted rounded w-1/2"></div>
                                <div className="h-3 bg-muted rounded w-2/3"></div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <Card className="p-8 text-center">
                <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                    Something went wrong
                </h3>
                <p className="text-muted-foreground mb-4">
                    We couldn't load the services. Please try again.
                </p>
                <Button onClick={onRetry} variant="outline">
                    Try Again
                </Button>
            </Card>
        );
    }

    if (services.length === 0) {
        return (
            <Card className="p-8 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                    No services found
                </h3>
                <p className="text-muted-foreground">
                    Try adjusting your search criteria or filters to find more results.
                </p>
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}

            {/* Infinite scroll trigger */}
            {hasNextPage && (
                <div ref={loadMoreRef} className="flex justify-center py-8">
                    {isFetchingNextPage ? (
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Loading more services...</span>
                        </div>
                    ) : (
                        <Button
                            variant="outline"
                            onClick={fetchNextPage}
                            className="px-8"
                        >
                            Load More Services
                        </Button>
                    )}
                </div>
            )}

            {/* End of results indicator */}
            {!hasNextPage && services.length > 0 && (
                <div className="text-center py-8 text-muted-foreground">
                    <p>You've reached the end of the results</p>
                </div>
            )}
        </div>
    );
}

interface ServiceCardProps {
    service: ServiceView;
}

function ServiceCard({ service }: ServiceCardProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
        }).format(price);
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`h-4 w-4 ${
                    index < Math.floor(rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex gap-6">
                {/* Service Image */}
                <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-muted rounded-lg overflow-hidden">
                        {service.bannerImageURL ? (
                            <img
                                src={service.bannerImageURL}
                                alt={service.name || 'Service'}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                <div className="text-4xl">🎯</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Service Details */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1 truncate">
                                {service.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                by {service.business?.name || service.user?.firstName + ' ' + service.user?.lastName}
                            </p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                            <Heart className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Rating and Reviews */}
                    {service.averageRating && service.averageRating > 0 && (
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">
                                {renderStars(service.averageRating)}
                            </div>
                            <span className="text-sm font-medium text-foreground">
                                {service.averageRating.toFixed(1)}
                            </span>
                            <span className="text-sm text-muted-foreground">
                                ({service.totalReviewCount || 0} reviews)
                            </span>
                        </div>
                    )}

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                        {service.description}
                    </p>

                    {/* Service Type and University */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {service.serviceType?.name && (
                            <Badge variant="secondary">
                                {service.serviceType.name}
                            </Badge>
                        )}
                        {service.university && (
                            <Badge variant="outline" className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {service.university}
                            </Badge>
                        )}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-foreground">
                            {formatPrice(service.price || 0)}
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                                View Details
                            </Button>
                            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
