
const API_URL = "https://raw.githubusercontent.com/Nusab19/__contest-hive-backend/main/cache/Data/atcoder.json";

export async function GET() {
	const response = await fetch(API_URL, {
	next: {
	  revalidate: 10 * 60, // 10 Minutes
	},
	});
	
	const data = await response.json();
	return new Response(JSON.stringify(data, null, 4));
}