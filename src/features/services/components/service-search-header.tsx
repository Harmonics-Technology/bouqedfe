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
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <Input
                            type="text"
                            placeholder="Search for services, providers, or keywords..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="pl-12 pr-24 h-12 bg-background border-2 border-border focus:border-blue-500 rounded-xl shadow-sm"
                        />
                        <Button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm"
                        >
                            Search
                        </Button>
                    </div>
                </form>

                {searchQuery && (
                    <div className="text-center mt-4">
                        <p className="text-sm text-muted-foreground">
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
