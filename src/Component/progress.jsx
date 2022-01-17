import {React, useState, useEffect} from "react";

const ProgressBar = (props) => {
    const {bgcolor, completed} = props;
    const [complete, setCompleted] = useState(0)

    const containerStyles = {
        height: 20,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${complete}%`,
        transition: 'width 1s ease-in-out',
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    useEffect(() => {
        setCompleted(completed)
    }, [completed])

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${complete}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar;