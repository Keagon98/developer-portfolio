import { createRouter, createWebHistory } from 'vue-router';
import sanity from '../client';
import Project from '../types/Project';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
          title: 'Home | Keagon Brinkhuis - Frontend Developer',
          metaTags: [
            {
              name: 'description',
              content: 'The home page of Keagon Brinkhuis portfolio web app.'
            },
            {
              property: 'og:description',
              content: 'The home page of Keagon Brinkhuis portfolio web app.'
            }
          ]
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
          title: 'About | Keagon Brinkhuis - Frontend Developer',
          metaTags: [
            {
              name: 'description',
              content: 'The about page of Keagon Brinkhuis portfolio web app. Goes into detail about who I am as a developer.'
            },
            {
              property: 'og:description',
              content: 'The about page of Keagon Brinkhuis portfolio web app. Goes into detail about who I am as a developer.'
            }
          ]
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Projects.vue'),
        meta: {
          title: 'Projects | Keagon Brinkhuis - Frontend Developer',
          metaTags: [
            {
              name: 'description',
              content: 'The projects page of Keagon Brinkhuis portfolio web app. Showcases some of the projects I built.'
            },
            {
              property: 'og:description',
              content: 'The projects page of Keagon Brinkhuis portfolio web app. Showcases some of the projects I built.'
            }
          ]
        },
        children: [
          {
            path: 'detail/:id',
            name: 'ProjectDetail',
            component: () => import('../views/ProjectDetail.vue'),
            beforeEnter: (to: any, from: any) => {
                const query = `*[_type == 'projects' && slug.current == '${to.params.id}'][0]`;
                let slug: String = '';
                sanity.fetch(query).then(
                    (response: any) => {
                        slug = response.slug.current;
                }).catch((error: any) => console.error(error));

                if (slug !== to.params.id) return {
                  name: 'NotFound',
                  params: { pathMatch: to.path.split('/').slice(1) },
                  query: to.query,
                  hash: to.hash
                }
            },
            meta: {
              title: 'Project Information | Keagon Brinkhuis - Frontend Developer',
              metaTags: [
                {
                  name: 'description',
                  content: 'The projects page of Keagon Brinkhuis portfolio web app. Showcases some of the projects I built.'
                },
                {
                  property: 'og:description',
                  content: 'The projects page of Keagon Brinkhuis portfolio web app. Showcases some of the projects I built.'
                }
              ]
            },
          }
        ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
      meta: {
        title: '404 Page not found | Keagon Brinkhuis - Frontend Developer',
      },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    let metaTitle: any = to.meta.title;
    
    document.title = metaTitle || 'Keagon Brinkhuis - Frontend Developer';
    next();
  });

export default router;