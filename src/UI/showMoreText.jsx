import clsx from 'clsx';
import React, { useState } from 'react';

const TruncateText = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = (e) => {
        e.preventDefault()
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='line'>
            <div className={clsx(
               ' relative overflow-hidden', isExpanded ? 'line-clamp-none' : 'line-clamp-1'
            )}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquid laboriosam unde vitae dignissimos reiciendis commodi sint, voluptatum numquam ducimus optio iure animi! Et, quia. Blanditiis dicta sapiente cum molestias.
            </div>
            <button
                onClick={toggleExpand}
                className="text-blue-500 hover:underline mt-2">
                {isExpanded ? 'Show less' : 'Show more'}
            </button>
        </div>
    );
};

export default TruncateText;
