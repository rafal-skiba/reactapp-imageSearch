import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 0iTs0oFtZOxRRSaSreLVhlHrc0iUI7q2ucNFY0UGrgM",
    },
    params: {
      query: term,
    },
  });

  return response;
};

export default searchImages;
