import { defineCollection, z } from 'astro:content';

const levels = ['n1', 'n2', 'n3', 'n4', 'n5'] as const;

const vocabulary = defineCollection({
  schema: z.object({
    title: z.string(),
    reading: z.string(),
    meaning: z.string(),
    level: z.enum(levels),
    jlpt_order: z.number().optional(),
    pos: z.string().optional(),
    example_sentence: z.string().optional(),
    example_reading: z.string().optional(),
    example_meaning: z.string().optional(),
  }),
});

const kanji = defineCollection({
  schema: z.object({
    title: z.string(),
    onyomi: z.string().optional(),
    kunyomi: z.string().optional(),
    meaning: z.string(),
    level: z.enum(levels),
    jlpt_order: z.number().optional(),
    stroke_count: z.number().optional(),
    compounds: z.array(z.object({
      word: z.string(),
      reading: z.string(),
      meaning: z.string(),
    })).optional(),
  }),
});

const grammar = defineCollection({
  schema: z.object({
    title: z.string(),
    level: z.enum(levels),
    category: z.string().optional(),
    jlpt_order: z.number().optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  }),
});

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    publisher: z.string().optional(),
    year: z.number().optional(),
    levels: z.array(z.enum(levels)),
    category: z.string(),
    rating: z.number().min(1).max(5).optional(),
    link: z.string().optional(),
  }),
});

const websites = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string(),
    levels: z.array(z.enum(levels)),
    category: z.string(),
    rating: z.number().min(1).max(5).optional(),
    free: z.boolean().optional(),
  }),
});

const ankiDecks = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string(),
    levels: z.array(z.enum(levels)),
    card_count: z.number().optional(),
    rating: z.number().min(1).max(5).optional(),
  }),
});

const tools = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string(),
    category: z.string(),
    platform: z.string().optional(),
    free: z.boolean().optional(),
  }),
});

const cheatsheets = defineCollection({
  schema: z.object({
    title: z.string(),
    level: z.enum(levels),
    category: z.string(),
    description: z.string(),
    downloadable: z.boolean().optional(),
  }),
});

const tips = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    level: z.array(z.enum(levels)).optional(),
    section: z.string().optional(),
  }),
});

export const collections = {
  'vocabulary': vocabulary,
  'kanji': kanji,
  'grammar': grammar,
  'books': books,
  'websites': websites,
  'anki-decks': ankiDecks,
  'tools': tools,
  'cheatsheets': cheatsheets,
  'tips': tips,
};
