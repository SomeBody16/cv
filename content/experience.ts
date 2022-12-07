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
        ],
        tags: ['Clojure', 'Docker', 'CircleCI', 'Python', 'NodeJS'],
    },
    {
        from: '11.2022',
        until: '02.2022',
        label: 'Junior Backend Developer',
        company: 'Netzindianer',
        duties: ['Bugfixes and features - German newspaper websites', 'Project development - SSO'],
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
        ],
        tags: ['Laravel', 'HTML', 'CSS', 'JavaScript'],
    },
]
