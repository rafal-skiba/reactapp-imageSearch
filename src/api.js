import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID tkZB9YElG9KIQAsNaRNt1aY86RcNajl__oK4PeIY8b4",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
