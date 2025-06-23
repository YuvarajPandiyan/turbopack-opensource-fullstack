import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  user: t.router({
    create: publicProcedure.input(z.object({
      id: z.string().uuid(),
      email: z.string().email(),
      name: z.string().min(1).max(100),
      createdAt: z.number(),
      updatedAt: z.number(),
      address: z
        .object({
          street: z.string().min(1).max(200),
          city: z.string().min(1).max(100),
          state: z.string().min(2).max(2), // Assuming US state codes
          zip: z.string().min(5).max(10), // US ZIP code format
        })
        .optional(),
      phone: z
        .string()
        .regex(
          /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Invalid phone number format',
        )
        .optional(),
      isActive: z.boolean().default(true),
      //   roles can be enum with default value
      roles: z.array(z.enum(['user', 'admin', 'guest'])).default(['user']),
    }).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
    })).output(z.object({
      id: z.string().uuid(),
      email: z.string().email(),
      name: z.string().min(1).max(100),
      createdAt: z.number(),
      updatedAt: z.number(),
      address: z
        .object({
          street: z.string().min(1).max(200),
          city: z.string().min(1).max(100),
          state: z.string().min(2).max(2), // Assuming US state codes
          zip: z.string().min(5).max(10), // US ZIP code format
        })
        .optional(),
      phone: z
        .string()
        .regex(
          /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Invalid phone number format',
        )
        .optional(),
      isActive: z.boolean().default(true),
      //   roles can be enum with default value
      roles: z.array(z.enum(['user', 'admin', 'guest'])).default(['user']),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    findAll: publicProcedure.output(z.array(z.object({
      id: z.string().uuid(),
      email: z.string().email(),
      name: z.string().min(1).max(100),
      createdAt: z.number(),
      updatedAt: z.number(),
      address: z
        .object({
          street: z.string().min(1).max(200),
          city: z.string().min(1).max(100),
          state: z.string().min(2).max(2), // Assuming US state codes
          zip: z.string().min(5).max(10), // US ZIP code format
        })
        .optional(),
      phone: z
        .string()
        .regex(
          /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Invalid phone number format',
        )
        .optional(),
      isActive: z.boolean().default(true),
      //   roles can be enum with default value
      roles: z.array(z.enum(['user', 'admin', 'guest'])).default(['user']),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    findOne: publicProcedure.input(z.object({
      id: z.string().uuid(),
      email: z.string().email(),
      name: z.string().min(1).max(100),
      createdAt: z.number(),
      updatedAt: z.number(),
      address: z
        .object({
          street: z.string().min(1).max(200),
          city: z.string().min(1).max(100),
          state: z.string().min(2).max(2), // Assuming US state codes
          zip: z.string().min(5).max(10), // US ZIP code format
        })
        .optional(),
      phone: z
        .string()
        .regex(
          /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Invalid phone number format',
        )
        .optional(),
      isActive: z.boolean().default(true),
      //   roles can be enum with default value
      roles: z.array(z.enum(['user', 'admin', 'guest'])).default(['user']),
    }).pick({ id: true })).output(z.object({
      id: z.string().uuid(),
      email: z.string().email(),
      name: z.string().min(1).max(100),
      createdAt: z.number(),
      updatedAt: z.number(),
      address: z
        .object({
          street: z.string().min(1).max(200),
          city: z.string().min(1).max(100),
          state: z.string().min(2).max(2), // Assuming US state codes
          zip: z.string().min(5).max(10), // US ZIP code format
        })
        .optional(),
      phone: z
        .string()
        .regex(
          /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Invalid phone number format',
        )
        .optional(),
      isActive: z.boolean().default(true),
      //   roles can be enum with default value
      roles: z.array(z.enum(['user', 'admin', 'guest'])).default(['user']),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    update: publicProcedure.input(z.object({
      id: z.string().uuid(),
      email: z.string().email(),
      name: z.string().min(1).max(100),
      createdAt: z.number(),
      updatedAt: z.number(),
      address: z
        .object({
          street: z.string().min(1).max(200),
          city: z.string().min(1).max(100),
          state: z.string().min(2).max(2), // Assuming US state codes
          zip: z.string().min(5).max(10), // US ZIP code format
        })
        .optional(),
      phone: z
        .string()
        .regex(
          /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Invalid phone number format',
        )
        .optional(),
      isActive: z.boolean().default(true),
      //   roles can be enum with default value
      roles: z.array(z.enum(['user', 'admin', 'guest'])).default(['user']),
    }).partial().omit({
      createdAt: true,
      updatedAt: true,
    })).output(z.object({
      id: z.string().uuid(),
      email: z.string().email(),
      name: z.string().min(1).max(100),
      createdAt: z.number(),
      updatedAt: z.number(),
      address: z
        .object({
          street: z.string().min(1).max(200),
          city: z.string().min(1).max(100),
          state: z.string().min(2).max(2), // Assuming US state codes
          zip: z.string().min(5).max(10), // US ZIP code format
        })
        .optional(),
      phone: z
        .string()
        .regex(
          /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Invalid phone number format',
        )
        .optional(),
      isActive: z.boolean().default(true),
      //   roles can be enum with default value
      roles: z.array(z.enum(['user', 'admin', 'guest'])).default(['user']),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    remove: publicProcedure.input(z.object({
      id: z.string().uuid(),
    })).output(z.object({ success: z.boolean() })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

