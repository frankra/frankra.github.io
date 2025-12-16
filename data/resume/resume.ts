interface Activity {
    description: string;
}

interface Experience {
    role: string;
    company: string;
    from: string;
    to: string;
    location: string;
    description: string;
    activities: Activity[];
    skills: string[];
}

interface Award {
    title: string;
    institution: string;
    location: string;
    date: string;
    description: string;
}

interface Initiative {
    title: string;
    institution: string;
    location: string;
    date: string;
    description: string;
}

interface Education {
    title: string;
    institution: string;
    from: string;
    to: string;
    level: string;
    location: string;
    activities: Activity[];
}

interface Language {
    name: string;
    proficiency: string;
}

interface Interest {
    name: string;
}

interface Skill {
    name: string;
}

interface Resume {
    name: string;
    role: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    githubUrl: string;
    linkedinUrl: string;
    webUrl: string;
    experiences: Experience[];
    awards: Award[];
    initiatives: Initiative[];
    education: Education[];
    languages: Language[];
    interests: Interest[];
    softSkills: Skill[];
    technicalSkills: Skill[];
}
