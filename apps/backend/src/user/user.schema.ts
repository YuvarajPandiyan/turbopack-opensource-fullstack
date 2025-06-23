import { z } from 'zod';

export const UserSchema = z.object({
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
});

export type User = z.infer<typeof UserSchema>;
export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type CreateUser = z.infer<typeof CreateUserSchema>;
export const UpdateUserSchema = UserSchema.partial().omit({
  createdAt: true,
  updatedAt: true,
});
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export const GetUserSchema = UserSchema.pick({ id: true });
export type GetUser = z.infer<typeof GetUserSchema>;
export const AllUsersSchema = z.array(UserSchema);

export const deleteUserSchema = z.object({
  id: z.string().uuid(),
});
export type DeleteUser = z.infer<typeof deleteUserSchema>;
