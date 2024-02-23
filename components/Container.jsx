import React from 'react'

function Container(props) {
    return (
        <>
            <div className="card" style={{ width: '20rem', }}>
                {props.children}
            </div>
        </>
    )
}

export default Container;