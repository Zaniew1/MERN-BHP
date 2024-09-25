import { z } from "zod";
export const newEnterpriseSchema = z.object({
  name: z.string().min(4).max(100),
  nip: z.number().gt(9).lt(11).int().positive(),
  regon: z.number().gt(13).lt(15).int().positive().optional(),
  region: z.string().min(2).max(100).optional(),
  city: z.string().min(2).max(100).optional(),
  postalcode: z.string().optional(),
  street: z.string().min(3).max(150).optional(),
  houseNumber: z.number().gt(0).lt(10000).optional(),
  roomNumber: z.number().gt(0).lt(1000).optional(),
  author: z.number(),
});

export type newEnterpriseType = z.infer<typeof newEnterpriseSchema>;
