import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [init, setInit] = useState(false);
    let navigate=useNavigate();


    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine); // Load full tsParticles features
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesConfig = {
        fpsLimit: 30,
        particles: {
            links: {
                color: "#4B5563", // Tailwind's gray-600
                distance: 400,
                enable: true,
                opacity: 0.5,
                width: 1.5,
            },
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#4B5563", // Match the link color for consistency
            },
            shape: {
                type: "circle", // Still required for the particles to exist but can be sized down
            },
            opacity: {
                value: 0, // Makes the circles completely invisible
            },
            size: {
                value: 0.01, // Practically invisible size
            },
            move: {
                enable: true,
                speed: 1, // Slow and smooth movement
                direction: "none",
                random: false,
                straight: false,
                outMode: "bounce", // Makes particles bounce off the edges
            },
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "grab", // Adds smooth interaction on hover
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                grab: {
                    distance: 150,
                    links: {
                        opacity: 0.7,
                    },
                },
                push: {
                    quantity: 2,
                },
            },
        },
        retina_detect: true,
    };
    

    return (
        <div
            style={{ height: "100vh" }}
            className="relative min-h-screen bg-gray-900 flex items-center justify-center"
        >
            {/* Particles Background */}
            {init && (
                <Particles
                    id="tsparticles"
                    options={particlesConfig}
                    className="absolute top-0 left-0 w-full h-full z-0"
                />
            )}

            {/* Form Container */}
            <div className="relative z-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                    {isSignup ? "Create an Account" : "Welcome Back"}
                </h1>
                <form className="space-y-6" 
                    onSubmit={(e)=>{
                        e.preventDefault()
                        navigate("/");
                    }}
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition"
                        
                    >
                        {isSignup ? "Sign Up" : "Log In"}
                    </button>
                    <button
                        type="button"
                        className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition"
                        onClick={(e)=>{
                            e.preventDefault()
                            navigate("/");
                        }}
                    >
                        Continue as Guest User
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                    {isSignup
                        ? "Already have an account?"
                        : "Don’t have an account?"}{" "}
                    <span
                        className="text-indigo-600 hover:underline cursor-pointer"
                        onClick={() => setIsSignup(!isSignup)}
                    >
                        {isSignup ? "Log In" : "Sign Up"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
