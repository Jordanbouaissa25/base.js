var my_object = {
    firstName : "Jean",
    lastName : "Dupont",
    option_name :"OPtion", 
    options:{
    name: "Option 1",
    testing: true
    }
}

var my_tree = {
    firstName: "Jean",
    lastName: "Dupont",
    dateStart: 1910,
    dateEnd: 1943,
    children: [
        {
            firstName: "Jean Junior",
            lastName: "Dupont",
            dateStart: 1930,
            dateEnd: 1973,
            children: [
            ]
        }
    ]
}
 
my_tree.children.push( {
    firstName: "Jean Junior 2",
    lastName: "Dupont 2",
    dateStart: 1935,
    dateEnd: 1979,
    children: []
})  

my_tree.children.pop()


console.log(my_tree.children)

var tab = ["lastName", "firstName", "options"]

