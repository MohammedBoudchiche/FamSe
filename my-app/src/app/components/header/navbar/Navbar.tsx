"use client";

import React, { useState } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {

        const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVpnDropdownOpen, setIsVpnDropdownOpen] = useState(false)

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleVpnDropdown = (): void => {
        setIsVpnDropdownOpen(!isVpnDropdownOpen)
    }

  return (
     <nav className="bg-white shadow-lg border-b-2 border-yellow-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-yellow-400" />
            <span className="text-2xl font-bold text-gray-800">VPN<span className="text-yellow-400">Pro</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Home
            </a>
            
            {/* VPN Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleVpnDropdown}
                className="flex items-center text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                <Link href="/articles">Articles</Link>
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isVpnDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* 
              {isVpnDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-10">
                  <a href="#nordvpn" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors">
                    NordVPN
                  </a>
                  <a href="#expressvpn" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors">
                    ExpressVPN
                  </a>
                  <a href="#surfshark" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors">
                    Surfshark
                  </a>
                  <a href="#cyberghost" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors">
                    CyberGhost
                  </a>
                </div>
              )}
              */}
            </div>
            <a href="#reviews" className="text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Reviews
            </a>
            <a href="#guides" className="text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Guides
            </a>
            <a href="#deals" className="text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium">
              About us
            </a>
            <a href="#about" className="text-gray-700 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="#get-started" className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Get Protected
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-yellow-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-medium transition-colors">
                Home
              </a>
              
              {/* Mobile VPN Services */}
              <div>
                <button
                  onClick={toggleVpnDropdown}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-medium transition-colors"
                >
                  Articles
                  <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isVpnDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isVpnDropdownOpen && (
                  <div className="pl-6 space-y-1">
                    <a href="#nordvpn" className="block px-3 py-2 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors">
                      NordVPN
                    </a>
                    <a href="#expressvpn" className="block px-3 py-2 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors">
                      ExpressVPN
                    </a>
                    <a href="#surfshark" className="block px-3 py-2 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors">
                      Surfshark
                    </a>
                    <a href="#cyberghost" className="block px-3 py-2 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors">
                      CyberGhost
                    </a>
                  </div>
                )}
              </div>

              <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-medium transition-colors">
                Reviews
              </a>
              <a href="#guides" className="block px-3 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-medium transition-colors">
                Guides
              </a>
              <a href="#deals" className="block px-3 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-medium transition-colors">
                About Us
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-medium transition-colors">
                Contact
              </a>
              
              {/* Mobile CTA */}
              <div className="pt-2">
                <a href="#get-started" className="block w-full text-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                  Get Protected
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

  )
}

export default Navbar