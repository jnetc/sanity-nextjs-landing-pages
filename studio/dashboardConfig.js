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
                  buildHookId: '5f631cbe9b99d382c103d303',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2q7hbzuv',
                  apiId: '42db0449-6d29-4392-97f7-507bd23591b3'
                },
                {
                  buildHookId: '5f631cbee55d1f78fd10dece',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kwq7q865',
                  apiId: 'dff52379-50fe-452f-a0cd-9853cf399ed3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jnetc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kwq7q865.netlify.app', category: 'apps'}
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
