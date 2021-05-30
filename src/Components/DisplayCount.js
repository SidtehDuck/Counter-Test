import React from "react";

const DisplayCount = ({ count }) => {

    const createCard = () => {
        return(
            <div
                style={{
                    height:'40%',
                    width: '40%',
                    backgroundColor: "lightblue",
                    boxShadow: '5px 10px gray',
                    borderRadius: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <p style={{fontFamily:'Times New Roman, Times, serif', fontSize:'100px'}}>{count}</p>
            </div>
        )
    }

    return(
        <div>
            {createCard()}
        </div>
    )
}

export default DisplayCount;