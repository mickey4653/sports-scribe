import { Button } from '@heroui/react'
import Link from 'next/link'
import { SportsSection } from '../components/ui/sports-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Sports Section */}
      <SportsSection />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Sport Scribe</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            AI-powered sports journalism platform that generates real-time sports articles using
            intelligent multi-agent systems.
          </p>
          <div className="flex gap-4 justify-center">
            <Button as={Link} href="/articles" color="primary" size="lg">
              View Articles
            </Button>
            <Button as={Link} href="/sports" variant="bordered" size="lg">
              Browse Sports
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
