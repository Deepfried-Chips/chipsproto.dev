import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="flex items-start space-x-4 bg-gradient-to-bl from-orange-500 to-purple-300 p-8 rounded-lg shadow-md mt-5">
            <img src={imageUrl} alt={title} className="w-48 h-48 object-cover mr-10" />
            <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
