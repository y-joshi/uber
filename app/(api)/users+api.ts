import { neon } from '@neondatabase/serverless';

const sql = neon(
  'postgresql://neondb_owner:npg_8e6fZroxaqlE@ep-noisy-bush-a1p8r9fu-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
);

// const posts = await sql('SELECT * FROM posts');

// See https://neon.com/docs/serverless/serverless-driver
// for more information
