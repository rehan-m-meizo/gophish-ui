import logo from "src/assets/logo.png";
import image2 from "src/assets/image2.png";

export default function Login() {
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-main to-accent flex items-center justify-center">
            <div
                className="grid grid-cols-2 bg-white drop-shadow-2xl/50  rounded-4xl overflow-hidden max-w-4xl">

                {/* Left Side Image */}
                <div className="bg-gradient-to-br from-main to-[#e0f0ff] clip-inward-right p-10 text-white">
                    <h1 className="text-4xl font-bold leading-snug text-accent">
                        Stay <span className="text-white">Ahead</span> of Threats.<br/>
                        <span className="text-white">Track</span> Phishing in <span
                        className="text-white">Real</span> Time.
                    </h1>
                    <div className="flex justify-center">
                        <img
                            className="h-65 w-65"
                            src={image2}
                            alt="Logo"
                        />
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="flex items-center justify-center p-6 bg-white rounded-md">
                    <form className="w-full max-w-sm space-y-4">

                        {/* Logo */}
                        <div className="flex justify-center">
                            <img
                                className="h-45 w-45"
                                src={logo}
                                alt="Logo"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">Username</label>
                            <input

                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                            />
                        </div>

                        {/* Checkbox */}
                        <label className="flex items-center space-x-2 text-sm text-gray-600">
                            <input type="checkbox" className="form-checkbox"/>
                            <span>Forget password?</span>
                        </label>

                        {/* Gradient Button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-gradient-to-r from-main to-secondary text-white rounded-md hover:from-main hover:to-secondary transition-all"
                        >
                            Login
                        </button>
                        <a className='text-[#6E6E6E] flex items-center justify-center'>Forget Password ?</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

