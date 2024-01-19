export type ExperienceItem = {
    from: string
    until: string
    label: string
    company: string
    duties: string[]
    tags: string[]
}

export const experience: ExperienceItem[] = [
    {
        from: '03.2022',
        until: 'now',
        label: 'Backend Developer',
        company: 'LiveKid',
        duties: [
            'Bugfixes and features - LiveKid',
            'Bugfixes and features - FunClass',
            'Project development - LiveKid Face',
            'Project development - LiveKid Microservices',
            'Manual application testing',
            'Writing Unit Tests',
            'Working in Agile Environment',
        ],
        tags: ['Clojure', 'Docker', 'CircleCI', 'Python', 'NodeJS', 'TypeScript', 'Google Cloud'],
    },
    {
        from: '11.2020',
        until: '02.2022',
        label: 'Junior Backend Developer',
        company: 'Netzindianer',
        duties: [
            'Bugfixes and features - German newspaper websites',
            'Project development - SSO',
            'Manual application testing',
            'Writing Unit Tests',
        ],
        tags: ['Vue2', 'PHP', 'Laravel'],
    },
    {
        from: '01.2020',
        until: '04.2020',
        label: 'Full Stack Web Developer',
        company: 'Web-Bespokers',
        duties: [
            'Bugfixes and features in football match scores managment tool',
            'Features in browser extension about filtering google result',
            'Manual application testing',
        ],
        tags: ['Laravel', 'HTML', 'CSS', 'JavaScript'],
    },
]
