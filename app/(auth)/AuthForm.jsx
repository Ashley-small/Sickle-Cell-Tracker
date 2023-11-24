"use client";

import { useState } from "react";

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => handleSubmit(e, email, password)}
      className="py-4 px-7 rounded-md block mx-auto min-w-fit w-1/4 bg-red-900"
    >
      <label className="block">
        <span>Email</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="block mt-2 my-4 px-2 py-1 rounded-sm w-full"
        />
      </label>
      <label className="block">
        <span>Password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="block mt-2 my-4 px-2 py-1 rounded-sm w-full"
        />
      </label>
      <button className="mx-auto px-3 py-2 rounded-sm flex justify-between items-center gap-2 text-lg font-semibold">
        Submit
      </button>
    </form>
  );
}
