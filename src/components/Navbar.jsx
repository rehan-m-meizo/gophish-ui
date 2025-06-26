
import { Search, Bell, Settings, User } from "lucide-react"
import { SearchInput} from "src/components/SearchInput.jsx";
import {Button} from "src/components/Button.jsx";
import {Avatar} from "src/components/Avatar.jsx";

export default function Navbar() {

    return (
        <header className="w-full bg-none px-6 py-8">
            <div className="flex justify-between max-w-7xl mx-auto">
                {/* Search Bar */}
                <div className="flex-1 w-full mx-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <SearchInput
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-3">
                    {/* Notification Bell */}
                    <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 border-primary-600 rounded-full">
                        <Bell className="w-5 h-5 text-gray-600" />
                    </Button>

                    {/* Settings */}
                    <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 border-primary-600 rounded-full">
                        <Settings className="w-5 h-5 text-gray-600" />
                    </Button>

                    {/* User Avatar */}
                    <Avatar className="w-12 h-12 border-primary-600 rounded-full">
                    </Avatar>
                </div>
            </div>
        </header>
    )
}