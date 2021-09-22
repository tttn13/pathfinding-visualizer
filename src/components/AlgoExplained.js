import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AlgoExplained = ({ currentAlgo, algoOptions }) => {
    const findAlgoName = () => {
        if (currentAlgo === null) return "Algorithm"
        else return algoOptions.find((algo) => algo.id === currentAlgo).type;
    }
    const findAlgo = () => {
        let url;
        if (findAlgoName() === "Dijkstra") url = "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
        else if (findAlgoName() === "A*") url = "https://en.wikipedia.org/wiki/A*_search_algorithm"
        else if (findAlgoName() === "Breadth First Search") url="https://en.wikipedia.org/wiki/Breadth-first_search"
        else if (findAlgoName() === "Depth First Search") url = "https://en.wikipedia.org/wiki/Depth-first_search"
        else url = "https://en.wikipedia.org/wiki/Pathfinding"
        return url;
    }
    return (
        <a href={findAlgo()} 
        target="_blank" rel="noopener noreferrer" 
        role="button"
        className="btn btn-outline-secondary link-danger" id="algoExplainedBtn"
        >
            {findAlgoName()} <br></br>Explained{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
    )
}

