import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RegistrationStepProps {
  title: string;
  description: string;
  currentStep: number;
  totalSteps: number;
  progress: number;
  children: React.ReactNode;
  onNext?: () => void;
  onPrev?: () => void;
  onSubmit?: () => void;
  isLoading?: boolean;
  canGoNext?: boolean;
  canGoPrev?: boolean;
  isLastStep?: boolean;
  className?: string;
}

export function RegistrationStep({
  title,
  description,
  currentStep,
  totalSteps,
  progress,
  children,
  onNext,
  onPrev,
  onSubmit,
  isLoading = false,
  canGoNext = true,
  canGoPrev = true,
  isLastStep = false,
  className
}: RegistrationStepProps) {
  return (
    <Card className={cn("shadow-2xl border-0 bg-card/80 backdrop-blur-sm", className)}>
      <CardHeader className="space-y-4 pb-6">
        {/* Progress indicator */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center space-x-2">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                i + 1 < currentStep
                  ? "bg-primary"
                  : i + 1 === currentStep
                  ? "bg-primary ring-4 ring-primary/20"
                  : "bg-muted"
              )}
            />
          ))}
        </div>

        <div className="text-center">
          <CardTitle className="text-2xl font-semibold text-foreground mb-2">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Form content */}
        <div className="space-y-4">
          {children}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onPrev}
            disabled={!canGoPrev || currentStep === 1 || isLoading}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          {isLastStep ? (
            <Button
              type="submit"
              onClick={onSubmit}
              disabled={!canGoNext || isLoading}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Complete Registration</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={onNext}
              disabled={!canGoNext || isLoading}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
