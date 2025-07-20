import { Pool } from 'pg';

// 配置 PostgreSQL 连接池
const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-green-dream-a1g9wr66-pooler.ap-southeast-1.aws.neon.tech',
  database: 'neondb',
  password: 'npg_TWbyKw5DF9BP',
  port: 5432,
  ssl: {
    rejectUnauthorized: true
  }
});

export async function POST(request: Request) {
  const { playerName, score } = await request.json();
  const createTime = new Date();
  let client;
  try {
    client = await pool.connect();
    const query = `
      INSERT INTO player_score (create_time, player_name, score)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [createTime, playerName, score];
    const result = await client.query(query, values);
    return Response.json(result.rows[0]);
  } catch (error) {
    console.error('Error saving player score:', error);
    return Response.json({ error: 'Failed to save player score' }, { status: 500 });
  } finally {
    if (client) {
      client.release();
    }
  }
}