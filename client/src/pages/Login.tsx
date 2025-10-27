import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { username });
    window.open("https://bglportal.com.au/login", "_blank");
  };

  const handleForgotPassword = () => {
    window.open("https://bglportal.com.au/login/resetpassword.html?firm=aussupersource", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col" data-route="login" data-contract-version="1.0.0" data-ready="login-page">
      <Navbar />
      
      <section className="flex-1 pt-32 pb-20 md:pt-40 md:pb-24 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Client Login
            </h1>
            <p className="text-muted-foreground">
              Access your secure client portal
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username:</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  data-field="login.username"
                  data-testid="input-username"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password:</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  data-field="login.password"
                  data-testid="input-password"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                data-action="login.submit"
                data-testid="button-sign-in"
              >
                Sign In
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-primary hover:underline"
                  data-testid="link-forgot-password"
                >
                  Forgot Password
                </button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
