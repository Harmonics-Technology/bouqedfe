import { useParams, Link, useNavigate } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MediaCarousel, MediaModal, type MediaItem } from "@/components/ui/media-carousel";
import {
    Star,
    MapPin,
    Heart,
    Share2,
    Clock,
    ArrowLeft,
    Calendar,
    CheckCircle,
    Users,
    Award,
    Camera,
    MessageCircle
} from "lucide-react";
import { useServiceDetail, useServiceReviews } from "../hooks/use-service-detail";
import { useState } from "react";
import type { ReviewView } from "@/api/models/ReviewView";

export function ServiceDetailPage() {
    const { serviceId } = useParams({ from: "/services/$serviceId" });
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const { data: service, isLoading, error } = useServiceDetail(serviceId);
    const { data: reviews } = useServiceReviews(serviceId, 5);

    if (isLoading) {
        return <ServiceDetailSkeleton />;
    }

    if (error || !service) {
        return <ServiceDetailError onRetry={() => window.location.reload()} />;
    }

    // Prepare media items from service data
    const mediaItems: MediaItem[] = [];

    // Add banner image if available
    if (service.bannerImageURL) {
        mediaItems.push({
            id: 'banner',
            url: service.bannerImageURL,
            type: 'image'
        });
    }

    // Add additional media if available
    if (service.media && service.media.length > 0) {
        service.media.forEach((media, index) => {
            if (media.url) {
                mediaItems.push({
                    id: media.id || `media-${index}`,
                    url: media.url
                });
            }
        });
    }

    const handleMediaClick = (_media: MediaItem, index: number) => {
        setModalIndex(index);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate({ to: "/services" })}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Services
                        </Button>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                                <Share2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Heart className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Media Gallery */}
                        {mediaItems.length > 0 ? (
                            <MediaCarousel
                                media={mediaItems}
                                aspectRatio="video"
                                showThumbnails={true}
                                onMediaClick={handleMediaClick}
                            />
                        ) : (
                            <Card className="overflow-hidden">
                                <div className="aspect-video bg-muted flex items-center justify-center">
                                    <Camera className="h-16 w-16 text-muted-foreground" />
                                </div>
                            </Card>
                        )}

                        {/* Service Info */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-2">
                                    {service.name}
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    by {service.business?.name || `${service.user?.firstName} ${service.user?.lastName}`}
                                </p>
                            </div>

                            {/* Rating and Reviews */}
                            {service.averageRating && service.averageRating > 0 && (
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, index) => (
                                                <Star
                                                    key={index}
                                                    className={`h-5 w-5 ${
                                                        index < Math.floor(service.averageRating!)
                                                            ? 'text-yellow-400 fill-current'
                                                            : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-lg font-semibold">
                                            {service.averageRating.toFixed(1)}
                                        </span>
                                    </div>
                                    <span className="text-muted-foreground">
                                        ({service.totalReviewCount || 0} reviews)
                                    </span>
                                </div>
                            )}

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {service.serviceType?.name && (
                                    <Badge variant="secondary" className="text-sm">
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

                            {/* Description */}
                            <div>
                                <h2 className="text-xl font-semibold mb-3">About this service</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description || "No description available for this service."}
                                </p>
                            </div>

                            {/* Additional Services */}
                            {service.additionalServices && service.additionalServices.length > 0 && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-3">Additional Services</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.additionalServices.map((addon, index) => (
                                            <Card key={index} className="p-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h3 className="font-medium">{addon.name}</h3>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-semibold">
                                                            {formatPrice(addon.price || 0)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Reviews Section */}
                        {reviews && reviews.length > 0 && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
                                <div className="space-y-4">
                                    {reviews.map((review, index) => (
                                        <ReviewCard key={index} review={review} />
                                    ))}
                                </div>
                                {service.totalReviewCount && service.totalReviewCount > 5 && (
                                    <Button variant="outline" className="mt-4">
                                        View all {service.totalReviewCount} reviews
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Booking Card */}
                        <Card className="p-6 sticky top-24">
                            <div className="space-y-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-foreground">
                                        {formatPrice(service.price || 0)}
                                    </div>
                                    <p className="text-sm text-muted-foreground">per service</p>
                                </div>

                                <Separator />

                                <div className="space-y-3">
                                    <Button
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                    >
                                        <Calendar className="h-4 w-4 mr-2" />
                                        Book Now
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full">
                                        <MessageCircle className="h-4 w-4 mr-2" />
                                        Contact Provider
                                    </Button>
                                </div>

                                <div className="text-center">
                                    <p className="text-xs text-muted-foreground">
                                        Free cancellation up to 24 hours before service
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* Provider Info */}
                        <Card className="p-6">
                            <h3 className="font-semibold mb-4">Service Provider</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                        {service.business?.name?.[0] || service.user?.firstName?.[0] || 'S'}
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            {service.business?.name || `${service.user?.firstName} ${service.user?.lastName}`}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Service Provider
                                        </p>
                                    </div>
                                </div>

                                {service.averageRating && (
                                    <div className="flex items-center gap-2 text-sm">
                                        <Award className="h-4 w-4 text-yellow-500" />
                                        <span>{service.averageRating.toFixed(1)} rating</span>
                                        <span className="text-muted-foreground">
                                            • {service.totalReviewCount} reviews
                                        </span>
                                    </div>
                                )}

                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Verified provider</span>
                                </div>
                            </div>
                        </Card>

                        {/* Quick Facts */}
                        <Card className="p-6">
                            <h3 className="font-semibold mb-4">Quick Facts</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <span>Response time: Usually within 2 hours</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    <span>Served 50+ customers</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                    <span>{service.university || 'Location available'}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Media Modal */}
            <MediaModal
                media={mediaItems}
                currentIndex={modalIndex}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onIndexChange={setModalIndex}
            />
        </div>
    );
}

function ReviewCard({ review }: { review: ReviewView }) {
    return (
        <Card className="p-4">
            <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {review.user?.firstName?.[0] || 'U'}
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <p className="font-medium">
                            {review.user?.firstName} {review.user?.lastName}
                        </p>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className={`h-3 w-3 ${
                                        index < (review.reviewCount || 0)
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {review.reviewNote}
                    </p>
                </div>
            </div>
        </Card>
    );
}

function ServiceDetailSkeleton() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="aspect-video animate-pulse bg-muted" />
                        <div className="space-y-4">
                            <div className="h-8 bg-muted rounded animate-pulse" />
                            <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                            <div className="h-20 bg-muted rounded animate-pulse" />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <Card className="p-6 h-64 animate-pulse bg-muted" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceDetailError({ onRetry }: { onRetry: () => void }) {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <Card className="p-8 text-center max-w-md">
                <h2 className="text-xl font-semibold mb-2">Service not found</h2>
                <p className="text-muted-foreground mb-4">
                    The service you're looking for doesn't exist or has been removed.
                </p>
                <div className="flex gap-2 justify-center">
                    <Button variant="outline" onClick={onRetry}>
                        Try Again
                    </Button>
                    <Link to="/services">
                        <Button>Browse Services</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}

function formatPrice(price: number) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    }).format(price);
}
