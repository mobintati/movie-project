import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category") || "trending";
  const genre = searchParams.get("genre");

  let endpoint = "";

  if (genre) {
    switch (category) {
      case "popular":
        endpoint =
          `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&sort_by=popularity.desc`;
        break;

      case "recent":
        endpoint =
          `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&sort_by=primary_release_date.desc`;
        break;

      case "trending":
      default:
        endpoint =
          `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&sort_by=popularity.desc`;
        break;
    }
  }

  
  else {
    switch (category) {
      case "popular":
        endpoint =
          "https://api.themoviedb.org/3/movie/popular";
        break;

      case "recent":
        endpoint =
          "https://api.themoviedb.org/3/discover/movie?sort_by=primary_release_date.desc";
        break;

      case "trending":
      default:
        endpoint =
          "https://api.themoviedb.org/3/trending/movie/day";
        break;
    }
  }

  console.log("CATEGORY:", category);
  console.log("GENRE:", genre);
  console.log("ENDPOINT:", endpoint);

  const res = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      accept: "application/json",
    },
  });

  const text = await res.text();

  console.log("TMDB STATUS:", res.status);
  console.log("TMDB RESPONSE:", text);

  if (!res.ok) {
    return NextResponse.json(
      {
        error: "TMDB Error",
        details: text,
      },
      {
        status: res.status,
      }
    );
  }

  try {
    return NextResponse.json(JSON.parse(text));
  } catch {
    return NextResponse.json(
      {
        error: "TMDB returned invalid JSON",
      },
      {
        status: 500,
      }
    );
  }
}
