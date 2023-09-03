
const API_URL = "https://raw.githubusercontent.com/Nusab19/__contest-hive-backend/main/cache/Data/hackerearth.json";

export async function GET() {
	const response = await fetch(API_URL, {
	next: {
	  revalidate: 5 * 60, // 5 Minutes
	},
	});
	
	const data = await response.json();
	return new Response(JSON.stringify(data, null, 4));
}