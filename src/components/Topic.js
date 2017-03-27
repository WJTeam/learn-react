import React from "react";

export const Topic = ({match}) => {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
};