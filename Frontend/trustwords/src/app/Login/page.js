import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="max-w-md w-[370px] h-[370px] p-8 bg-white rounded-[20px] shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>
        <form className="space-y-6">
          <div className="flex flex-col">
            <Input 
              id="email" 
              type="email" 
              placeholder="Email Address" 
              required 
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
            />
          </div>
          <div className="flex flex-col">
            <Input 
              id="password" 
              type="password" 
              placeholder="Password" 
              required 
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>
            <a href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">Forgot password?</a>
          </div>
          <div>
            <Button className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-200">
              Log In
            </Button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">Don't have an account? 
            <a href="/Signup" className="text-blue-500 hover:text-blue-700"> Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
