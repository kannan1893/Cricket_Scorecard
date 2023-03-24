const initialState ={team: [
    {
        name:"Shikar Dhawan",
        runs:0,
        wicket: "NOT OUT",
        id:1
    },
    {
        name:"Rohit Sharma",
        runs:0,
        wicket: "NOT OUT",
        id:2
    },
    {
        name:"Virat Kohli",
        runs:0,
        wicket: "NOT OUT",
        id:3
    },
    {
        name:"Ajinkya Rahane",
        runs:0,
        wicket: "NOT OUT",
        id:4
    },
    {
        name:"Mahendra Singh Dhoni",
        runs:0,
        wicket: "NOT OUT",
        id:5
    },
    {
        name:"Ravindra Jadeja",
        runs:0,
        wicket: "NOT OUT",
        id:6
    },
    {
        name:"Hardik Pandya",
        runs:0,
        wicket: "NOT OUT",
        id:7
    },
    {
        name:"Ravichandran Ashwin",
        runs:0,
        wicket: "NOT OUT",
        id:8
    },
    {
        name:"Bhuvanesh Kumar",
        runs:0,
        wicket: "NOT OUT",
        id:9
    },
    {
        name:"Jasprit Bumrah",
        runs:0,
        wicket: "NOT OUT",
        id:10
    },
    {
        name:"Umesh Yadav",
        runs:0,
        wicket: "NOT OUT",
        id:11
    },
    
]}


function reducer(state=initialState,action){

    switch(action.type){
        case "ONES":
            return {...state,
                team:state.team.map((player) => {
                if (player.id === action.payload) {
                   return {...player,runs:player.runs+1}
                }
                else{
                    return player
                }
            })
            }
        case "TWOS":
            return {...state,
                team:state.team.map((player) => {
                if (player.id === action.payload) {
                   return {...player,runs:player.runs+2}
                }
                else{
                    return player
                }
            })
            }
        case "FOURS":
            return {...state,
                team:state.team.map((player) => {
                if (player.id === action.payload) {
                   return {...player,runs:player.runs+4}
                }
                else{
                    return player
                }
            })
            }
        case "SIXES":
            return {...state,
                team:state.team.map((player) => {
                if (player.id === action.payload) {
                   return {...player,runs:player.runs+6}
                }
                else{
                    return player
                }
            })
            }
        case "WICKET":
            return {...state,
                team:state.team.map((player) => { 
                    
                if (player.id === action.payload) {
                   return {...player,wicket:player.wicket.replace("NOT OUT","OUT")}
                }
                else{
                    return player
                }       
            })
            }
        default:
            return state;
    
}}
export default reducer