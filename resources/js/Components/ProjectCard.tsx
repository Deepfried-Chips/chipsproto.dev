import React, {ReactNode} from 'react';

interface ProjectCardProps {
    title: ReactNode;
    description: ReactNode;
    imageAlt?: string;
    imageUrl: string;
    className?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, imageAlt, className }) => {
    return (
        <div className={`flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 bg-gradient-to-bl from-orange-500 to-purple-300 p-8 rounded-lg shadow-md mt-5 ${className}`}>
            <img src={imageUrl} alt={imageAlt} className="w-48 h-48 object-cover mr-10" />
            <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
