import React from 'react'
import {
    handleMouseLeaveEvent,
    handleMouseUpEvent,
    handleMouseDownEvent,
    handleMouseEnterEvent,
  } from "./utils/mouseHandlers";


const ResultTable = ({ gridState }) => {
    const extraClassName = ({isFinish, isStart, isWall }) => {
        const cn = "node "
        if (isFinish) return cn + "finish"
        else if (isStart) return cn + "start"
        else if (isWall) return cn + "wall"
        else return cn + " "
    }

    const classNamesList = (row) => {
        let list = []
        row.forEach(node => {
            const {isFinish, isStart, isWall } = node;
            const name = extraClassName({ isFinish, isStart, isWall })
            list.push({id: node.id, name: name })
          })  
        return list;
    } 
    
    const filterName = (suppliedId, nameList) => {
        return nameList.filter((nameAndId) => suppliedId === nameAndId.id)[0].name
    }
    
    
    const addRow = ({ row, rowIdx }) => {
        return (
            <tr key={rowIdx}>
                {row.map((node, nodeIdx) => {
                    const namesList = classNamesList(row)
                    const nodeName = filterName( node.id, namesList)
                    return (<td 
                        key={node.id}
                        className= {nodeName}
                        id={`node-${node.row}-${node.col}`}
                        onMouseDown={() => handleMouseDownEvent(node.row, node.col)}
                        onMouseEnter={() => handleMouseEnterEvent(node.row, node.col)}
                        onMouseUp={() => handleMouseUpEvent(node.row, node.col)}>
                            
                        </td>)
                })}
            </tr>
        )
    }

    const renderTable = (grid) => {
        const gridClone = JSON.parse(JSON.stringify(grid));
        return (
            <table 
            className="grid-container table-responsive"
            onMouseLeave={() => handleMouseLeaveEvent()} >
                <thead> </thead>
                <tbody>
                    {gridClone.map((row, rowIdx) => {
                    return addRow({row, rowIdx})
                    })}
                </tbody>
            </table>
          )
    }

    return (
        <>
            {gridState.length > 0 ? (
                <div className="container">
                    {renderTable(gridState)} 
                </div>
            ) : null }
        </>
    )
}

export default ResultTable





 


