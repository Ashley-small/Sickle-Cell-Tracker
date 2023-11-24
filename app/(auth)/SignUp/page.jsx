"use client";
import AuthForm from "../AuthForm";

export default function Login() {
  const handleSubmit = async (e, password, email) => {
    e.preventDefault();
    console.log("user login", email, password);
  };
  return (
    <main className="max-w-5xl my-12 mx-auto px-8">
      <h2 className="mb-4 pb-2 text-base text-center">Sign Up</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
