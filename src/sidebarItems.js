export default [
    {
        title: "Authentication",
        children: [
            {
                title: "Login", 
                icon: "mdi-login", 
                to: "/authentication/login",
            },
            {
                title: "Logout", 
                icon: "mdi-logout", 
                to: "/authentication/logout"
            }
        ],
        
    }, 
    {
        title: "Project",
        children: [
            {
                title: "Projects",
                icon: "mdi-file-presentation-box",
                to: "/projects",
            },
        ]
    },  
    {
        title: "Simple Tables",
        children: [
            {
                title: "Simple Table", 
                icon: "mdi-table", 
                to: "/tables/simpletable"
            }
        ]
    },
    
];