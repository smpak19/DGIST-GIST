import {React, useState, useEffect} from "react";

const ProgressBar = (props) => {
    const {bgcolor, completed} = props;
    const [complete, setCompleted] = useState(0)

    const containerStyles = {
        height: 40,
        width: '90%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 30,
    }

    const fillerStyles = {
        height: '100%',
        width: `${complete}%`,
        transition: 'width 1s ease-in-out',
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    const labelStyles = {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    }

    useEffect(() => {
        setCompleted(completed)
    }, [completed])

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <div style={labelStyles}>{`${complete}%`}</div>
            </div>
        </div>
    )
}

export default ProgressBar;