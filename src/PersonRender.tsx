import React from 'react';

interface IPersonRender {
    name: string;
    age?: number;
    job?: string;
    skills?: Array<string>;
    showName?(): string;
    setJob?(job: string): void;
    showSkills?(): Array<string>;
    getSalaryOfYear?(): number;
}

const PersonRender: React.FC<IPersonRender> = (
    {
        name,
        age,
        showName,
        showSkills,
        getSalaryOfYear}
    ) => {
    const skills = showSkills && showSkills().join(', ');

    return(
        <>
            <div>Age - {age}</div>
            <div>Name - {showName ? showName(): name}</div>
            <div>Skills - {skills}</div>
            <div>Salary - {getSalaryOfYear && getSalaryOfYear()}</div>
            <hr/>
        </>
    )
}
export default PersonRender;
