abstract class APerson {
    public name: string;
    public age: number;
    public job: string;
    protected salary: number

    constructor(name: string) {
        this.name = name
    };

    public showName = (): string => {
        return this.name;
    };

    public setSalary = (rate: number): void => {
        this.salary = rate
    };

    public getSalaryOfYear = ():number => {
        return this.salary * 12;
    };

    public changeName?(name: string): void;
    public showSkills?(): Array<string>;

    public abstract setJob(job: string): void;
}

//decorator
function addSkills <T extends Function>(target: T): T {

    let construct: Function = function (name: string) {
        this.name = name;
        this.skills = ['js', 'react', 'nodejs'];
        this.showSkills = (): Array<string> => {
            return this.skills;
        }
    };

    return <T>construct;
}


export class Person extends APerson {
    constructor(name:string) {
        super(name);
        this.name = name;
    }

    public setJob(job: string) {
        this.job = job;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public changeName (name:string) {
        this.name = name
    }
}

@addSkills
export class Person2 extends APerson{
    public name: string;

    constructor(name:string) {
        super(name)
        this.name = name
    }

    public setJob(job: string) { // will not work because of constructor is overloaded and class will not have this method
        this.job = job;
    }
}
