export const fuseNavigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'login',
                'title': 'Login',
                'type' : 'item',
                'icon' : 'lock',
                'url'  : '/login'
            },
            {
                'id'   : 'register',
                'title': 'Register',
                'type' : 'item',
                'icon' : 'person_add',
                'url'  : '/register'
            }
        ]
    }
];
