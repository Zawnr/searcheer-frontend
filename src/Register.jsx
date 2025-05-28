import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Password and confirmation do not match!");
      return;
    }
    alert(`Akun berhasil dibuat!\nEmail: ${email}\nUsername: ${username}`);
    navigate("/login"); // Redirect ke halaman Login setelah register sukses
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-1 text-white leading-tight">Grow your career with us</h2>
      <h3 className="text-lg font-semibold mb-3 text-white/80">
        Discover endless job opportunities
      </h3>
      <p className="mb-8 text-white/80 text-base">
        Find your dream job and take a new step toward a brighter future with Searcheers.
      </p>
      <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 bg-[#39455a] text-white border border-[#9CA3AF] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Username */}
        <input
          type="text"
          placeholder="Create your username"
          className="w-full px-4 py-3 bg-[#39455a] text-white border border-[#9CA3AF] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {/* Passwords */}
        <div className="flex gap-4">
          {/* Password */}
          <div className="relative flex-1">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Create password"
              className="w-full px-4 py-3 bg-[#39455a] text-white border border-[#9CA3AF] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-xl"
              onClick={() => setShowPass((s) => !s)}
              tabIndex={-1}
              aria-label="Show password"
            >
              {showPass ? "🙈" : "👁️"}
            </button>
          </div>
          {/* Confirm password */}
          <div className="relative flex-1">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full px-4 py-3 bg-[#39455a] text-white border border-[#9CA3AF] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base pr-12"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              minLength={8}
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-xl"
              onClick={() => setShowConfirm((s) => !s)}
              tabIndex={-1}
              aria-label="Show password"
            >
              {showConfirm ? "🙈" : "👁️"}
            </button>
          </div>
        </div>
        <p className="text-xs text-white/70 pl-1">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </p>
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#232d3b] font-semibold py-3 rounded-xl text-lg transition shadow-md"
        >
          Sign up
        </button>
      </form>
      <p className="mt-8 text-center text-white/70 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-yellow-400 font-medium">
          Sign in
        </Link>
      </p>
    </>
  );
}
