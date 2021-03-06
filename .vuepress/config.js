module.exports = {
    lang: 'en-US',
    title: 'Scrumpy',
    themeConfig: {
        docsRepo: 'heyscrumpy/learn',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        search: true,
        algolia: {
            apiKey: 'd0e739ed5b4ea64c632502fbd1453b1a',
            indexName: 'scrumpy',
        },
        sidebar: {
            '/': [
                {
                    title: 'Getting Started',
                    collapsable: false,
                    children: [
                        '',
                        'getting-started/roadmap',
                        // 'getting-started/tutorial',
                    ]
                },
                {
                    title: 'Agile',
                    collapsable: false,
                    children: [
                        // 'agile/backlog',
                        'agile/stories',
                        'agile/story-points',
                        // 'agile/epics',
                        // 'agile/sprints',
                    ]
                },
                {
                    title: 'Integrations',
                    collapsable: false,
                    children: [
                        'integrations/github',
                        'integrations/gitlab',
                        // 'integrations/bitbucket',
                        // 'integrations/slack',
                    ]
                },
                // {
                //     title: 'Import',
                //     collapsable: false,
                //     children: [
                //         'import/excel',
                //         'import/trello',
                //         'import/jira',
                //     ]
                // },
                {
                    title: 'About',
                    collapsable: false,
                    children: [
                        'about/team',
                        'about/open-source',
                        'about/press',
                        'about/jobs',
                    ]
                },
            ],
        },
        nav: [
            {
                text: 'Links',
                items: [
                    { text: 'Sign In', link: 'https://app.scrumpy.io/' },
                    { text: 'Download Apps', link: 'https://scrumpy.io/apps' },
                    { text: 'Changelog', link: 'https://scrumpy.io/changelog' },
                    { text: 'Site Notice', link: 'https://scrumpy.io/imprint' },
                    { text: 'Blog', link: 'https://medium.com/scrumpy' },
                ]
            },
        ],
    },
}