import { z } from "zod";
import { userResponseDtoSchema } from "../userResponseDtoSchema";
import { registerDtoSchema } from "../registerDtoSchema";


export const authControllerRegister201Schema = z.lazy(() => userResponseDtoSchema);


export const authControllerRegister400Schema = ;


export const authControllerRegister409Schema = ;


export const authControllerRegisterMutationRequestSchema = z.lazy(() => registerDtoSchema);


export const authControllerRegisterMutationResponseSchema = z.lazy(() => userResponseDtoSchema);