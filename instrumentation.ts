
import { dbCoonection } from './db/connection'

export async function register() {
    await dbCoonection()
}