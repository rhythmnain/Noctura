import React, { useEffect, useState } from "react";
import axios from "axios";

const Excuses = () => {
    const [excuses, setExcuses] = useState([]);

    useEffect(() => {
        fetchExcuses();
    }, []);

    const fetchExcuses = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/excuses/random");
            setExcuses(response.data.excuse);
        } catch (error) {
            console.error("Error fetching excuses:", error);
        }
    };

    return (
        <div>
            <h1>Excuses</h1>
            <p>{excuses}</p>
            <button onClick={fetchExcuses}>New Excuse</button>
        </div>
    );
};

export default Excuses;