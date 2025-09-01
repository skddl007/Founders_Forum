#!/bin/bash

# Founders Forum - Vercel Deployment Script
# This script automates the deployment process to Vercel

set -e  # Exit on any error

echo "🚀 Founders Forum - Vercel Deployment Script"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
check_node() {
    print_status "Checking Node.js installation..."
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 16+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 16 ]; then
        print_error "Node.js version 16+ is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_success "Node.js $(node -v) is installed"
}

# Check if npm is installed
check_npm() {
    print_status "Checking npm installation..."
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_success "npm $(npm -v) is installed"
}

# Check if Vercel CLI is installed
check_vercel() {
    print_status "Checking Vercel CLI installation..."
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI is not installed. Installing now..."
        npm install -g vercel
        print_success "Vercel CLI installed"
    else
        print_success "Vercel CLI is installed"
    fi
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    if [ ! -d "node_modules" ]; then
        npm install
        print_success "Dependencies installed"
    else
        print_status "Dependencies already installed, skipping..."
    fi
}

# Build the project
build_project() {
    print_status "Building the project..."
    npm run build
    print_success "Project built successfully"
}

# Check environment variables
check_env() {
    print_status "Checking environment variables..."
    
    if [ ! -f ".env" ]; then
        print_warning ".env file not found. Creating example file..."
        cp env.example .env
        print_warning "Please update .env file with your configuration before deploying"
    fi
    
    # Check if required environment variables are set
    if [ -z "$REACT_APP_API_BASE_URL" ] && [ -z "$REACT_APP_SUPABASE_URL" ]; then
        print_warning "No API configuration found. Please set environment variables:"
        echo "  - REACT_APP_API_BASE_URL (for FastAPI backend)"
        echo "  - REACT_APP_SUPABASE_URL (for Supabase backend)"
    fi
}

# Deploy to Vercel
deploy_to_vercel() {
    print_status "Deploying to Vercel..."
    
    if [ "$1" = "production" ]; then
        print_status "Deploying to production..."
        vercel --prod
    else
        print_status "Deploying to preview..."
        vercel
    fi
    
    print_success "Deployment completed!"
}

# Main deployment function
main() {
    echo ""
    print_status "Starting deployment process..."
    
    # Run checks
    check_node
    check_npm
    check_vercel
    
    # Install and build
    install_dependencies
    check_env
    build_project
    
    # Deploy
    if [ "$1" = "production" ]; then
        deploy_to_vercel "production"
    else
        deploy_to_vercel "preview"
    fi
    
    echo ""
    print_success "🎉 Deployment completed successfully!"
    echo ""
    print_status "Next steps:"
    echo "  1. Set up environment variables in Vercel dashboard"
    echo "  2. Configure custom domain (optional)"
    echo "  3. Set up monitoring and analytics"
    echo ""
    print_status "For detailed instructions, see DEPLOYMENT.md"
}

# Help function
show_help() {
    echo "Founders Forum - Vercel Deployment Script"
    echo ""
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  production    Deploy to production environment"
    echo "  preview       Deploy to preview environment (default)"
    echo "  help          Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0              # Deploy to preview"
    echo "  $0 production   # Deploy to production"
    echo "  $0 help         # Show help"
}

# Parse command line arguments
case "${1:-preview}" in
    "production")
        main "production"
        ;;
    "preview")
        main "preview"
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        print_error "Unknown option: $1"
        show_help
        exit 1
        ;;
esac
