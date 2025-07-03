const apiKey = "7f911a9b92625a0b62ba46d978ca4e33";

document.getElementById("searchBtn")?.addEventListener("click", async () => {
  const input = document.getElementById("searchInput") as HTMLInputElement;
  const result = document.getElementById("result") as HTMLDivElement;
  const query = input.value.trim();

  if (!query) {
    alert("მიუთითეთ ფილმის სახელი");
    return;
  }

  result.innerHTML = "Loading...";

  try {
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(
        query
      )}&page=1&include_adult=false`
    );
    const searchData = await searchResponse.json();

    if (!searchData.results.length) {
      result.innerHTML = "<p>No movies found.</p>";
      return;
    }

    const firstMovieId = searchData.results[0].id;

    const detailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${firstMovieId}?api_key=${apiKey}&language=en-US`
    );
    const movieDetails: MovieDetails = await detailsResponse.json();

    result.innerHTML = "";
    result.appendChild(createMovieCard(movieDetails));
  } catch (error) {
    console.error(error);
    result.innerHTML = "<p>Error fetching movie data.</p>";
  }
});

interface Genre {
  id: number;
  name: string;
}

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string | null;
  genres: Genre[];
}

function createMovieCard(movie: MovieDetails): HTMLElement {
  const { title, overview, release_date, vote_average, genres, backdrop_path } =
    movie;

  const genreNames = genres.map((g) => g.name).join(", ");
  const year = release_date ? new Date(release_date).getFullYear() : "N/A";
  const rating = vote_average?.toFixed(1) ?? "N/A";
  const backgroundUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w780${backdrop_path}`
    : "https://via.placeholder.com/780x439?text=No+Image";

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
<div class="flex flex-col rounded-xl bg-[#1313133b] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 @xl:flex-row">
  <div class="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-t-xl @xl:rounded-l-xl @xl:rounded-r-none bg-gray-700" style="background-image: url('${backgroundUrl}');"></div>
  <div class="flex w-full min-w-72 flex-col gap-3 p-6 @xl:p-8">
    <h3 class="text-white text-xl font-bold tracking-tight">${title}</h3>
    <div class="flex flex-col gap-2">
      <p class="text-gray-300 text-base leading-relaxed line-clamp-3">${overview}</p>
      <p class="text-gray-400 text-sm font-medium">
        ${year} | ${genreNames} | <span class="text-yellow-400">IMDb: ${rating}</span>
      </p>
    </div>
  </div>
  `;

  return card;
}

document.getElementById("searchInput")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("searchBtn")?.click();
  }
});
