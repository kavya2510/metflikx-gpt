import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BACKGROUND } from "../../utils/constants";
const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="background-img" src={LOGIN_BACKGROUND} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GPTSearch;
