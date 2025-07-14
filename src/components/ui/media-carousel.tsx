import { useState, useEffect, useCallback } from "react";
import { Button } from "./button";
import { Card } from "./card";
import { ChevronLeft, ChevronRight, X, Play, Pause, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MediaItem {
    id: string;
    url: string;
    type?: 'image' | 'video';
}

interface MediaCarouselProps {
    media: MediaItem[];
    className?: string;
    aspectRatio?: 'square' | 'video' | 'wide';
    showThumbnails?: boolean;
    autoPlay?: boolean;
    interval?: number;
    onMediaClick?: (media: MediaItem, index: number) => void;
}

export function MediaCarousel({
    media,
    className,
    aspectRatio = 'video',
    showThumbnails = false,
    autoPlay = false,
    interval = 5000,
    onMediaClick
}: MediaCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);

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

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying || media.length <= 1) return;

        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [isPlaying, nextSlide, interval, media.length]);

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
                    <div className="text-4xl mb-2">📷</div>
                    <p>No media available</p>
                </div>
            </Card>
        );
    }

    const currentMedia = media[currentIndex];
    const mediaType = getMediaType(currentMedia);

    return (
        <div className={cn("relative", className)}>
            {/* Main carousel */}
            <Card className="overflow-hidden">
                <div className={cn("relative bg-black", aspectRatioClasses[aspectRatio])}>
                    {mediaType === 'image' ? (
                        <img
                            src={currentMedia.url}
                            alt={`Media ${currentIndex + 1}`}
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => onMediaClick?.(currentMedia, currentIndex)}
                        />
                    ) : (
                        <video
                            src={currentMedia.url}
                            className="w-full h-full object-cover cursor-pointer"
                            controls
                            onClick={() => onMediaClick?.(currentMedia, currentIndex)}
                        />
                    )}

                    {/* Navigation arrows */}
                    {media.length > 1 && (
                        <>
                            <Button
                                variant="secondary"
                                size="sm"
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
                                onClick={prevSlide}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="secondary"
                                size="sm"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
                                onClick={nextSlide}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </>
                    )}

                    {/* Fullscreen button */}
                    <Button
                        variant="secondary"
                        size="sm"
                        className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white border-0"
                        onClick={() => onMediaClick?.(currentMedia, currentIndex)}
                    >
                        <Maximize2 className="h-4 w-4" />
                    </Button>

                    {/* Play/pause for auto-play */}
                    {media.length > 1 && autoPlay && (
                        <Button
                            variant="secondary"
                            size="sm"
                            className="absolute top-2 left-2 bg-black/50 hover:bg-black/70 text-white border-0"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                    )}

                    {/* Dots indicator */}
                    {media.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {media.map((_, index) => (
                                <button
                                    key={index}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-colors",
                                        index === currentIndex ? 'bg-white' : 'bg-white/50'
                                    )}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    )}

                    {/* Media counter */}
                    {media.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                            {currentIndex + 1} / {media.length}
                        </div>
                    )}
                </div>
            </Card>

            {/* Thumbnails */}
            {showThumbnails && media.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    {media.map((item, index) => {
                        const thumbMediaType = getMediaType(item);
                        return (
                            <button
                                key={item.id}
                                className={cn(
                                    "flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors",
                                    index === currentIndex ? 'border-primary' : 'border-transparent'
                                )}
                                onClick={() => goToSlide(index)}
                            >
                                {thumbMediaType === 'image' ? (
                                    <img
                                        src={item.url}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-black flex items-center justify-center">
                                        <Play className="h-4 w-4 text-white" />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

interface MediaModalProps {
    media: MediaItem[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onIndexChange: (index: number) => void;
}

export function MediaModal({ media, currentIndex, isOpen, onClose, onIndexChange }: MediaModalProps) {

    const nextMedia = () => {
        onIndexChange((currentIndex + 1) % media.length);
    };

    const prevMedia = () => {
        onIndexChange((currentIndex - 1 + media.length) % media.length);
    };

    // Handle keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    prevMedia();
                    break;
                case 'ArrowRight':
                    nextMedia();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !media.length) return null;

    const currentMedia = media[currentIndex];
    const getMediaType = (item: MediaItem): 'image' | 'video' => {
        if (item.type) return item.type;

        const url = item.url.toLowerCase();
        if (url.includes('.mp4') || url.includes('.webm') || url.includes('.ogg') || url.includes('video')) {
            return 'video';
        }
        return 'image';
    };

    const mediaType = getMediaType(currentMedia);

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            {/* Close button */}
            <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                onClick={onClose}
            >
                <X className="h-6 w-6" />
            </Button>

            {/* Navigation */}
            {media.length > 1 && (
                <>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                        onClick={prevMedia}
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                        onClick={nextMedia}
                    >
                        <ChevronRight className="h-8 w-8" />
                    </Button>
                </>
            )}

            {/* Media content */}
            <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                {mediaType === 'image' ? (
                    <img
                        src={currentMedia.url}
                        alt={`Media ${currentIndex + 1}`}
                        className="max-w-full max-h-full object-contain"
                    />
                ) : (
                    <video
                        src={currentMedia.url}
                        className="max-w-full max-h-full object-contain"
                        controls
                        autoPlay
                    />
                )}
            </div>

            {/* Media info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                <p className="text-sm opacity-75">
                    {currentIndex + 1} of {media.length}
                </p>
            </div>

            {/* Thumbnail strip */}
            {media.length > 1 && (
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto">
                    {media.map((item, index) => {
                        const thumbMediaType = getMediaType(item);
                        return (
                            <button
                                key={item.id}
                                className={cn(
                                    "flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-colors",
                                    index === currentIndex ? 'border-white' : 'border-white/30'
                                )}
                                onClick={() => onIndexChange(index)}
                            >
                                {thumbMediaType === 'image' ? (
                                    <img
                                        src={item.url}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                        <Play className="h-3 w-3 text-white" />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
