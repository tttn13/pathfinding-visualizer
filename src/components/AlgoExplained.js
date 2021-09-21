
export const AlgoExplained = ({ currentAlgo, algoOptions }) => {
    const findAlgoName = () => {
        if (currentAlgo === null) return "Not Selected"
        else return algoOptions.find((algo) => algo.id === currentAlgo).type;
    }
    const findAlgo = () => {
        let url;
        if (findAlgoName() === "Dijkstra") url = "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
        else if (findAlgoName() === "A*") url = "https://en.wikipedia.org/wiki/A*_search_algorithm"
        else if (findAlgoName() === "Breadth First Search") url="https://en.wikipedia.org/wiki/Breadth-first_search"
        else if (findAlgoName() === "Depth First Search") url = "https://en.wikipedia.org/wiki/Depth-first_search"
        else url = "#"
        return url;
    }
    return (
        <a href={findAlgo()} target="_blank" rel="noopener noreferrer" className="link-danger">
            {findAlgoName()}
        </a>
    )
}

