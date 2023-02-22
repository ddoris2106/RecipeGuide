const name = {};

const getName = (author) => {
    // If the author data exists
    if(author){
        // Check if the author has both a name and alias
        if(author.name !== null && author.alias !== null){
            name.length = 2;

            // Order the name
            if(author.primary === "name") {
                name.first = author.name;
                name.last = author.alias; 
            }
            else{
                name.first = author.alias;
                name.last = author.name; 
            }
        }
        else{
            name.length = 1;
            author.name === null ? name.first = author.alias : name.first = author.name;
        }
    }
    else{
        name.length = 1;
        name.first = "Coming Soon";
    }

    return name;
    
};

export default getName;