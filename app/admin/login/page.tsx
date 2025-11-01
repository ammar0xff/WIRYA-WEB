"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export default function AdminLogin() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simple authentication - in production use proper backend auth
    const defaultEmail = "admin@werya.com"
    const defaultPassword = "admin123"

    if (formData.email === defaultEmail && formData.password === defaultPassword) {
      localStorage.setItem("adminToken", "authenticated")
      router.push("/admin")
    } else {
      setError("Invalid email or password")
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md border border-border/40 bg-card/50 p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-foreground">Werya Admin</h1>
          <p className="mt-2 text-sm text-foreground/60">Sign in to your admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@werya.com"
              required
              className="bg-input border-border"
            />
            <p className="mt-2 text-xs text-foreground/50">Demo: admin@werya.com</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="bg-input border-border pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <p className="mt-2 text-xs text-foreground/50">Demo: admin123</p>
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50">
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/40">
          <p className="text-xs text-foreground/60">
            <strong>Demo Credentials:</strong>
            <br />
            Email: admin@werya.com
            <br />
            Password: admin123
          </p>
        </div>
      </Card>
    </main>
  )
}
