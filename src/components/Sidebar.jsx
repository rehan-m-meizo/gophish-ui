import { Link, NavLink } from "react-router-dom";
import { routes } from "src/routes/routes";
import logo from "src/assets/logo.png";

export default function Sidebar() {
    const topRoutes = routes.filter((item) => item.level !== 2);
    const bottomRoutes = routes.filter((item) => item.level === 2);

    return (
        <aside className="fixed inset-y-4 left-4 z-50 w-72 py-8 px-4 border-2 border-primary-600 bg-white shadow-brutal">
            {/* Logo */}
            <div className="flex items-center justify-center py-4">
                <Link to="/">
                    <img
                        className="h-30 w-30 object-contain"
                        src={logo}
                        alt="Logo"
                    />
                </Link>
            </div>

            {/* Navigation */}
            <div className="px-2 pb-4">
                {/* Top Routes */}
                {topRoutes.map((item) => (
                    <div key={item.to} className="mb-3">
                        <NavLink
                            relative={item.to}
                            to={item.to}
                            replace={true}
                            end
                        >
                            {({ isActive }) => (
                                <div
                                    className={`flex items-center gap-3 px-4 py-2 border-2 border-primary-600 rounded-lg transition-all duration-150 shadow-brutal ${
                                        isActive
                                            ? "bg-primary-600 text-white scale-100"
                                            : "bg-white text-black hover:bg-accent/20 hover:scale-[1.02]"
                                    }`}
                                >
                                    <item.Icon className="w-6 h-6" />
                                    {item.Name}
                                </div>
                            )}
                        </NavLink>
                    </div>
                ))}

                {/* Divider */}
                {bottomRoutes.length > 0 && (
                    <hr className="my-6 border-primary-600" />
                )}

                {/* Bottom Routes */}
                {bottomRoutes.map((item) => (
                    <div key={item.to} className="mb-3">
                        <NavLink
                            relative={item.to}
                            to={item.to}
                            replace={true}
                            end
                        >
                            {({ isActive }) => (
                                <div
                                    className={`flex items-center gap-3 px-4 py-2 border-2 border-primary-600 rounded-lg transition-all duration-150 shadow-brutal ${
                                        isActive
                                            ? "bg-primary-600 text-white scale-100"
                                            : "bg-white text-black hover:bg-accent/20 hover:scale-[1.02]"
                                    }`}
                                >
                                    <item.Icon className="w-6 h-6" />
                                    {item.Name}
                                </div>
                            )}
                        </NavLink>
                    </div>
                ))}
            </div>
        </aside>
    );
}
