import { z } from 'zod';

const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required!',
    }),
    age: z.number({
      required_error: 'age is required!',
    }),
    location: z.string({
      required_error: 'location is required!',
    }),
    breed: z.string({
      required_error: 'breed is required!',
    }),
    weight: z.number({
      required_error: 'weight is required!',
    }),
    label: z.string({
      required_error: 'label is required!',
    }),
    category: z.string({
      required_error: 'category is required!',
    }),
    seller: z.string({
      required_error: 'seller is required!',
    }),
  }),
});

const updateCowZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'name is required!',
      })
      .optional(),
    age: z
      .number({
        required_error: 'age is required!',
      })
      .optional(),
    location: z
      .string({
        required_error: 'location is required!',
      })
      .optional(),
    breed: z
      .string({
        required_error: 'breed is required!',
      })
      .optional(),
    weight: z
      .number({
        required_error: 'weight is required!',
      })
      .optional(),
    label: z
      .string({
        required_error: 'label is required!',
      })
      .optional(),
    category: z
      .string({
        required_error: 'category is required!',
      })
      .optional(),
    seller: z
      .string({
        required_error: 'seller is required!',
      })
      .optional(),
  }),
});

export const CowValidation = {
  createCowZodSchema,
  updateCowZodSchema,
};
