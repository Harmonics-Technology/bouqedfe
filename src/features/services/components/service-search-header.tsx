import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ServiceSearchHeaderProps {
    searchQuery: string;
    onSearch: (query: string) => void;
    resultsCount: number;
}

export function ServiceSearchHeader({ searchQuery, onSearch, resultsCount }: ServiceSearchHeaderProps) {
    const [inputValue, setInputValue] = useState(searchQuery);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(inputValue);
    };

    return (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        Find the Perfect Service
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover amazing services from talented providers in your area
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <Input
                            type="text"
                            placeholder="Search for services, providers, or keywords..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="pl-12 pr-24 h-14 text-lg bg-background border-2 border-border focus:border-blue-500 rounded-xl shadow-sm"
                        />
                        <Button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg"
                        >
                            Search
                        </Button>
                    </div>
                </form>

                {searchQuery && (
                    <div className="text-center mt-6">
                        <p className="text-muted-foreground">
                            {resultsCount > 0
                                ? `Found ${resultsCount} service${resultsCount === 1 ? '' : 's'} for "${searchQuery}"`
                                : `No services found for "${searchQuery}"`
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
