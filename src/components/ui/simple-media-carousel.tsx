import { useState, useEffect, useCallback } from "react";
import { Card } from "./card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MediaItem {
    id: string;
    url: string;
    type?: 'image' | 'video';
}

interface SimpleMediaCarouselProps {
    media: MediaItem[];
    className?: string;
    aspectRatio?: 'square' | 'video' | 'wide';
    autoPlay?: boolean;
    interval?: number;
    onMediaClick?: (media: MediaItem, index: number) => void;
}

export function SimpleMediaCarousel({
    media,
    className,
    aspectRatio = 'square',
    autoPlay = false,
    interval = 4000,
    onMediaClick
}: SimpleMediaCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const aspectRatioClasses = {
        square: 'aspect-square',
        video: 'aspect-video',
        wide: 'aspect-[21/9]'
    };

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % media.length);
    }, [media.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    }, [media.length]);

    // Auto-play functionality (paused on hover)
    useEffect(() => {
        if (!autoPlay || media.length <= 1 || isHovered) return;

        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [autoPlay, nextSlide, interval, media.length, isHovered]);

    // Determine media type from URL if not provided
    const getMediaType = (item: MediaItem): 'image' | 'video' => {
        if (item.type) return item.type;

        const url = item.url.toLowerCase();
        if (url.includes('.mp4') || url.includes('.webm') || url.includes('.ogg') || url.includes('video')) {
            return 'video';
        }
        return 'image';
    };

    if (!media.length) {
        return (
            <Card className={cn("flex items-center justify-center bg-muted", aspectRatioClasses[aspectRatio], className)}>
                <div className="text-muted-foreground text-center">
                    <div className="text-2xl mb-1">📷</div>
                    <p className="text-xs">No media</p>
                </div>
            </Card>
        );
    }

    const currentMedia = media[currentIndex];
    const mediaType = getMediaType(currentMedia);

    return (
        <div
            className={cn("relative group", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className="overflow-hidden">
                <div className={cn("relative bg-black", aspectRatioClasses[aspectRatio])}>
                    {mediaType === 'image' ? (
                        <img
                            src={currentMedia.url}
                            alt={`Media ${currentIndex + 1}`}
                            className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                            onClick={() => onMediaClick?.(currentMedia, currentIndex)}
                        />
                    ) : (
                        <video
                            src={currentMedia.url}
                            className="w-full h-full object-cover cursor-pointer"
                            muted
                            onClick={() => onMediaClick?.(currentMedia, currentIndex)}
                        />
                    )}

                    {/* Navigation arrows - only show on hover and if multiple media */}
                    {media.length > 1 && (
                        <>
                            <button
                                className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevSlide();
                                }}
                            >
                                <ChevronLeft className="h-3 w-3" />
                            </button>
                            <button
                                className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextSlide();
                                }}
                            >
                                <ChevronRight className="h-3 w-3" />
                            </button>
                        </>
                    )}

                    {/* Simple dots indicator - only show if multiple media */}
                    {media.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {media.map((_, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "w-1.5 h-1.5 rounded-full transition-all duration-200",
                                        index === currentIndex
                                            ? 'bg-white scale-110'
                                            : 'bg-white/50 hover:bg-white/75'
                                    )}
                                />
                            ))}
                        </div>
                    )}

                    {/* Media count badge - only show if multiple media */}
                    {media.length > 1 && (
                        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded text-[10px] font-medium">
                            {currentIndex + 1}/{media.length}
                        </div>
                    )}

                    {/* Video indicator */}
                    {mediaType === 'video' && (
                        <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded text-[10px] font-medium">
                            VIDEO
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
