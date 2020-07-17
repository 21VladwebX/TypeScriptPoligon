import React from 'react';
import { render } from 'react-dom';
import PersonRender from './PersonRender'
import {Person, Person2} from './Person/index'

const App: React.FC = () => {
    const person1 = new Person('Bender');
    const person2 = new Person2('Mark2');

    person1.setSalary(5000);
    person1.setAge(300);

    const personRenderProps = {
        name: person1.name,
        age: person1.age,
        showName: person1.showName,
        setJob: person1.setJob,
        getSalaryOfYear: person1.getSalaryOfYear
    }
    const person2Props = {
        name: person2.name,
        showSkills: person2.showSkills,
    }

    return(
        <>
            <PersonRender {...personRenderProps}/>
            <PersonRender {...person2Props}/>
            <h1> Its webpack</h1>
        </>
    )
}
render(<App />, document.getElementById('app'))
