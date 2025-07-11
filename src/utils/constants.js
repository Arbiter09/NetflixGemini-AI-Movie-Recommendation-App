export const NETFLIX_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/US-en-20250630-TRIFECTA-perspective_4b4aacfd-9451-48c8-9767-5609064be0a3_large.jpg";

export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_LOGO =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
  },
};

export const IMG_TMDB_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const WORD_LIMIT = 40;

export const DEFAULT_MOVIE_POSTER =
  "https://previews.123rf.com/images/puruan/puruan1702/puruan170208905/72742724-cinema-film-icon-in-doodle-sketch-lines-symbol-records-take-start.jpg";
