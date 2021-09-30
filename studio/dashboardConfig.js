export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6155af64e49b821447915a58',
                  title: 'Sanity Studio',
                  name: 'nextjs-sanity-landing-pages-studio',
                  apiId: '473c9c87-582f-401c-8031-235c8995b153'
                },
                {
                  buildHookId: '6155af6466609105aa5ec972',
                  title: 'Landing pages Website',
                  name: 'nextjs-sanity-landing-pages',
                  apiId: 'e476bc64-f263-44a9-8970-d006ee522518'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devinekadeni/nextjs-sanity-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-sanity-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
