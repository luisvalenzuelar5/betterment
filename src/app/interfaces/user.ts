export interface User {
    first_name: string;
    last_name: string;
    email: '';
    toast_masters: boolean;
    women_of_republic: boolean;
    role: string;
    location: string;
    is_mentor: boolean;
    is_mentee: boolean;
    photo: any;
    badges: any;
    categories?: Skill[];
}

export interface Skill {
    id?: number;
    name: string;
    description: string;
    has_skill: boolean;
    needs_skill: boolean;
}

export const UserFactory = (): User => ({
    first_name: '',
    last_name: '',
    email: '',
    toast_masters: false,
    women_of_republic: false,
    role: '',
    location: '',
    is_mentor: false,
    is_mentee: false,
    photo: '',
    badges: [],
    categories: [] as Skill[]
});

export const SkillFactory = (): Skill[] => ([
    { id: 1, name: 'Career Development', description: null, has_skill: false, needs_skill: false },
    { id: 2, name: 'Communication/Public Speaking', description: null, has_skill: false, needs_skill: false},
    { id: 3, name: 'Creative Thinking', description: null, has_skill: false, needs_skill: false },
    { id: 4, name: 'Goal Setting And Management', description: null, has_skill: false, needs_skill: false },
    { id: 5, name: 'Marketing', description: null, has_skill: false, needs_skill: false },
    { id: 6, name: 'Microsoft Office', description: null, has_skill: false, needs_skill: false },
    { id: 7, name: 'Organizational', description: null, has_skill: false, needs_skill: false },
    { id: 8, name: 'Problem Solving', description: null, has_skill: false, needs_skill: false },
    { id: 9, name: 'Project Management', description: null, has_skill: false, needs_skill: false },
    { id: 10, name: 'Team Leadership', description: null, has_skill: false, needs_skill: false },
    { id: 11, name: 'Tehnical', description: null, has_skill: false, needs_skill: false }
]);

