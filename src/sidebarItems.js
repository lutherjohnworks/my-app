export default [
    { 
        title: "ToDo",
        icon: "mdi-format-list-checks",
        to: "/"    
    },
    {
        title: "About", 
        icon: "mdi-help-box", 
        to: "/about" 
    },
    {
        header: "Forms",
        title: "Form", 
        icon: "mdi-book-information-variant", 
        to: "/form" 
    },
    { header: "Authentication" },
    {
        group: "/",
        model: false,
        icon: "",
        title: "Authentication",
        children: [
            {
                title: "Login", 
                icon: "mdi-login", 
                to: "/authentication/login"
            },
            {
                title: "Logout", 
                icon: "mdi-logout", 
                to: "/authentication/logout"
            }
        ]
    },
    { header: "Tables" },
    {
        group: "/",
        model: false,
        icon: "",
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