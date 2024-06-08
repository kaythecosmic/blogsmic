"use client";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Input from "@/components/Input";
import { UserMinus } from "lucide-react";
import { Button } from "@/components/ui/button";

const AuthPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [stateVarient, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) =>
            currentVariant == "login" ? "register" : "login"
        );
    }, []);

    return (
        <MaxWidthWrapper>
            <div className="flex py-20">
                <section className="flex flex-col border w-full rounded-md p-4 m-auto">
                    <div className="text-2xl font-black">
                        {stateVarient == "login" ? "Glad to have you back!" : "Welcome to the blogsmic"}
                    </div>
                    {stateVarient == 'register' &&
                        <div className="flex flex-col gap-1 mt-1">
                            <Input
                                id="email"
                                onchange={(event: any) => setEmail(event.target.value)}
                                value={email}
                                label="Email"
                                type="email"
                                name="email"
                                className=""
                                placeholder="Enter your email"
                            />
                            <Input
                                id="username"
                                onchange={(event: any) => setUsername(event.target.value)}
                                value={username}
                                label="Username"
                                type="text"
                                name="username"
                                className=""
                                placeholder="Pick a new username"
                            />
                            <Input
                                id="password"
                                onchange={(event: any) => setPassword(event.target.value)}
                                value={password}
                                label="Password"
                                type="password"
                                name="password"
                                className=""
                                placeholder="Make a new password"
                            />

                            <Input
                                id="password"
                                onchange={(event: any) => setPassword(event.target.value)}
                                value={password}
                                label="Confirm Password"
                                type="password"
                                name="password"
                                className=""
                                placeholder="Re-enter the password"
                            />

                            <div className="mt-4 flex justify-center items-center">
                                <Button variant="outline" className="px-4 py-2 font-bold hover:bg-emerald-400 hover:text-black">Register</Button>
                            </div>

                            <span className="mt-4 text-center w-full">
                                Already a user? Sign in <span className="font-bold text-emerald-600 cursor-pointer hover:underline" onClick={toggleVariant}>here</span>
                            </span>
                        </div>
                    }

                    {stateVarient == 'login' &&
                        <div className="flex flex-col gap-1 mt-1">
                            <Input
                                id="username"
                                onchange={(event: any) => setUsername(event.target.value)}
                                value={username}
                                label="Username"
                                type="text"
                                name="username"
                                className=""
                                placeholder="Enter your username"
                            />
                            <Input
                                id="password"
                                onchange={(event: any) => setPassword(event.target.value)}
                                value={password}
                                label="Password"
                                type="password"
                                name="password"
                                className=""
                                placeholder="Enter your password"
                            />
                            <div className="mt-4 flex justify-center items-center">
                                <Button variant="outline" className="px-4 py-2 font-bold hover:bg-emerald-400 hover:text-black">Login</Button>
                            </div>
                            <span className="mt-4 text-center w-full">
                                Don't have an account? Register <span className="font-bold text-emerald-600 cursor-pointer hover:underline" onClick={toggleVariant}>here</span>
                            </span>
                        </div>
                    }
                </section>
            </div>
        </MaxWidthWrapper>
    );
};

export default AuthPage;
