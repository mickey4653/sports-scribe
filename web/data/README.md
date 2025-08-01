# Data Directory

This directory contains sample data and data management utilities for the Sports Scribe application.

## Structure

- `sample-articles.ts` - Sample article data with TypeScript interfaces and utility functions

## Sample Articles

The `sample-articles.ts` file contains:

- **SampleArticle interface** - TypeScript interface defining the structure of article data
- **sampleArticles array** - Array of sample articles with realistic content
- **getArticleById(id)** - Utility function to find an article by its ID
- **getAllArticles()** - Utility function to get all sample articles

## Article Structure

Each article contains:

```typescript
interface SampleArticle {
  id: string;                    // Unique identifier
  title: string;                 // Article title
  subtitle: string;              // Article subtitle
  excerpt: string;               // Short excerpt for cards
  content: string;               // Full article content (markdown)
  sport: string;                 // Sport category
  createdAt: string;             // ISO date string
  author: string;                // Author name
  featuredImage: string;         // Featured image URL
  relatedArticles: RelatedArticle[]; // Array of related articles
}
```

## Usage

```typescript
import { getAllArticles, getArticleById } from '@/data/sample-articles';

// Get all articles for listing
const articles = getAllArticles();

// Get specific article by ID
const article = getArticleById('1');
```

## Future Enhancements

- Add more sports categories (Basketball, Football, Baseball, etc.)
- Implement data validation schemas
- Add mock API endpoints
- Create data seeding utilities
- Add image assets for articles 