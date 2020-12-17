
const menuitems = [
    { 
        id: 1, 
        name: 'home', 
        label: 'Home',
        icon: 'fa fa-fw fa-home fa-lg',
        link: '/master/1'
    },
    {
        id: 2,
        name: 'billing',
        label: 'User',
        icon: 'fa fa-fw fa-user fa-lg',
        color: "#007bff",
        items: 
            [
                { 
                    id: 3, 
                    name: 'edit user', 
                    label: 'Edit User',
                    icon: 'fa fa-fw fa-edit fa-lg',
                    link: '/'
                },
                { 
                    id: 4, 
                    name: 'user role', 
                    label: 'User Role',
                    icon: 'fa fa-fw fa-user-circle fa-lg',
                    color: "#00AAff",
                    items: 
                    [
                        { id: 6, name: 'user role 1', label: 'User Role 1', icon: 'fa fa-fw fa-user fa-lg', link:'/master/3'},
                        { id: 7, name: 'user role 1', label: 'User Role 2', icon: 'fa fa-fw fa-user fa-lg', link:'/master/4'},
                    ]
                },
            ],
    },
    {
        id: 2,
        name: 'billing',
        label: 'Libraries',
        icon: 'fa fa-fw fa-user fa-lg',
        color: "#007bff",
        items: 
            [
                { 
                    id: 13, 
                    name: 'edit user', 
                    label: 'Library 1',
                    icon: 'fa fa-fw fa-edit fa-lg',
                    link: '/master/lib1'
                },
                { 
                    id: 14, 
                    name: 'user role', 
                    label: 'Library 2',
                    icon: 'fa fa-fw fa-user-circle fa-lg',
                    color: "#00AAff",
                    items: 
                    [
                        { id: 16, name: 'user role 1', label: 'Sub Library 2.1', icon: 'fa fa-fw fa-user fa-lg', link:'/master/103'},
                        { id: 17, name: 'user role 1', label: 'Sub Library 2.2', icon: 'fa fa-fw fa-user fa-lg', link:'/master/113'},
                    ]
                },
                { 
                    id: 24, 
                    name: 'user role', 
                    label: 'Library 3',
                    icon: 'fa fa-fw fa-user-circle fa-lg',
                    color: "#00AAff",
                    items: 
                    [
                        { id: 26, name: 'user role 1', label: 'Sub Library 3.1', icon: 'fa fa-fw fa-user fa-lg', link:'/master/104'},
                        { id: 27, name: 'user role 1', label: 'Sub Library 3.2', icon: 'fa fa-fw fa-user fa-lg', link:'/master/115'},
                    ]
                },
            ],
    },
    { 
        id: 5,
        name: 'settings', 
        label: 'Settings',
        icon: 'fa fa-fw fa-cog fa-lg',
        link: '/master/2'
    },
]

export default menuitems
