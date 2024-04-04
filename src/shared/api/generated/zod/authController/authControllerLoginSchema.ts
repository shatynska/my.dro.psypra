import { z } from "zod";
import { loginResponseDtoSchema } from "../loginResponseDtoSchema";
import { loginDtoSchema } from "../loginDtoSchema";


export const authControllerLogin201Schema = z.lazy(() => loginResponseDtoSchema);


export const authControllerLogin400Schema = ;


export const authControllerLogin401Schema = ;


export const authControllerLoginMutationRequestSchema = z.lazy(() => loginDtoSchema);


export const authControllerLoginMutationResponseSchema = z.lazy(() => loginResponseDtoSchema);