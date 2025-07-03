"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
const apiKey = "7f911a9b92625a0b62ba46d978ca4e33";
(_a = document.getElementById("searchBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const input = document.getElementById("searchInput");
    const result = document.getElementById("result");
    const query = input.value.trim();
    if (!query) {
        alert("მიუთითეთ ფილმის სახელი");
        return;
    }
    result.innerHTML = "Loading...";
    try {
        const searchResponse = yield fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`);
        const searchData = yield searchResponse.json();
        if (!searchData.results.length) {
            result.innerHTML = "<p>No movies found.</p>";
            return;
        }
        const firstMovieId = searchData.results[0].id;
        const detailsResponse = yield fetch(`https://api.themoviedb.org/3/movie/${firstMovieId}?api_key=${apiKey}&language=en-US`);
        const movieDetails = yield detailsResponse.json();
        result.innerHTML = "";
        result.appendChild(createMovieCard(movieDetails));
    }
    catch (error) {
        console.error(error);
        result.innerHTML = "<p>Error fetching movie data.</p>";
    }
}));
function createMovieCard(movie) {
    var _a;
    const { title, overview, release_date, vote_average, genres, backdrop_path } = movie;
    const genreNames = genres.map((g) => g.name).join(", ");
    const year = release_date ? new Date(release_date).getFullYear() : "N/A";
    const rating = (_a = vote_average === null || vote_average === void 0 ? void 0 : vote_average.toFixed(1)) !== null && _a !== void 0 ? _a : "N/A";
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
(_b = document.getElementById("searchInput")) === null || _b === void 0 ? void 0 : _b.addEventListener("keydown", (e) => {
    var _a;
    if (e.key === "Enter") {
        e.preventDefault();
        (_a = document.getElementById("searchBtn")) === null || _a === void 0 ? void 0 : _a.click();
    }
});
