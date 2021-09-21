import {
  handleMouseLeaveEvent,
  handleMouseUpEvent,
  handleMouseDownEvent,
  handleMouseEnterEvent,
} from "./utils/mouseHandlers";
import Node from './Node/Node'

const Grid = ({ grid }) => {

  const addRow = ({ row, rowIdx }) => {
    return (
        <tr key={rowIdx}>
            {row.map((node, nodeIdx) => {
                const { id, col, row, type } = node
                return (<Node 
                    id={id}
                    col={col}
                    row={row}
                    type={type}
                    onMouseDown={handleMouseDownEvent}
                    onMouseEnter={handleMouseEnterEvent}
                    onMouseUp={handleMouseUpEvent} />)
            })}
        </tr>
    )
}

const renderTable = (aGrid) => {
    const gridClone = JSON.parse(JSON.stringify(aGrid));
    return (
        <table 
        className="grid-container table-responsive"
        onMouseLeave={() => handleMouseLeaveEvent()} >
            <thead> </thead>
            <tbody>
                {gridClone.map((row, rowIdx) => {
                    return addRow({row, rowIdx})
                    })
                }
            </tbody>
        </table>
      )
}

return (
    <>
        {grid.length > 0 ? (
            <div className="container">
                {renderTable(grid)} 
            </div>
        ) : null }
    </>
)
};

export default Grid;
