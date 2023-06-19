"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string({
            required_error: 'password is required!',
        }),
        name: zod_1.z.object({
            firstName: zod_1.z.string({
                required_error: 'First name is required',
            }),
            lastName: zod_1.z.string({
                required_error: 'Last name is required',
            }),
        }),
        phoneNumber: zod_1.z.string({
            required_error: 'phone number is required!',
        }),
        role: zod_1.z.string({
            required_error: 'role is required!',
        }),
        address: zod_1.z.string({
            required_error: 'address is required!',
        }),
        income: zod_1.z.number().optional(),
        budget: zod_1.z.number().optional(),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z
            .string({
            required_error: 'password is required!',
        })
            .optional(),
        name: zod_1.z
            .object({
            firstName: zod_1.z
                .string({
                required_error: 'First name is required',
            })
                .optional(),
            lastName: zod_1.z
                .string({
                required_error: 'Last name is required',
            })
                .optional(),
        })
            .optional(),
        phoneNumber: zod_1.z
            .string({
            required_error: 'phone number is required!',
        })
            .optional(),
        role: zod_1.z
            .string({
            required_error: 'role is required!',
        })
            .optional(),
        address: zod_1.z
            .string({
            required_error: 'address is required!',
        })
            .optional(),
        income: zod_1.z.number().optional(),
        budget: zod_1.z.number().optional(),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};
