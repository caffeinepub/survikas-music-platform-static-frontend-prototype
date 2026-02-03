# Editing Guide for Music Platform Prototype

This guide explains how to edit the content displayed in your music platform prototype. All mock data is centralized in TypeScript modules for easy editing.

## 📁 Content Files Location

All editable content is located in the `frontend/src/data/` directory:

- **`types.ts`** - TypeScript type definitions (usually no need to edit)
- **`homeContent.ts`** - Home page featured artists and trending tracks
- **`artistContent.ts`** - Artist profile pages with bios and track lists
- **`competitionsContent.ts`** - Competitions and leaderboard data
- **`profileContent.ts`** - User profile information and tracks
- **`rewardsContent.ts`** - Badges, rewards, and transaction history

## 🖼️ Static Assets Location

Static assets (images, audio files) are stored in:

- **`frontend/public/assets/`** - Your uploaded assets (artist photos, album covers, audio files)
- **`frontend/public/assets/generated/`** - Generated placeholder images

In your code, reference these assets as:
- `/assets/filename.jpg` for regular assets
- `/assets/generated/filename.png` for generated assets

## ✏️ Common Editing Tasks

### 1. Change a Featured Artist Card (Home Page)

**File:** `frontend/src/data/homeContent.ts`

**Example:** To change the first featured artist:

