import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  className="h-8 w-auto"
                  src="/logo-dark.png"
                  alt="Logotipo"
                />
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/cases"
                  className="inline-flex items-center px-1 pt-1 text-gray-900"
                >
                  Casos
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900"
                >
                  Panel
                </Link>
                <Link
                  to="/settings"
                  className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900"
                >
                  Configuración
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {children}
      </motion.main>
    </div>
  );
}
