import schema from './schema.json'
import {schemaFormatter, schemaURL} from "./schemaFormatter";

export const strapiFormatter = {
    schema: schema,
    fromSchema:schemaFormatter,
    schemaURL: schemaURL
}