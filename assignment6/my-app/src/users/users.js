import React,{Component} from 'react';


class users extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            listofIteam:
            [

            ],

            index:0
            
        }
    }

    handleAdd()
    {
        var textinput = document.getElementById("newIteam").value;

        if(textinput.length > 0)
        {
            const newIteam = {text:textinput,index:this.state.index+1}

            this.state.index = this.state.index+1

            this.setState({
                listofIteam: [...this.state.listofIteam,newIteam]
            })

        }
        else
        {
            alert("Enter a value to be added")
        }
       
    }

    
    handleDelete(a)
    {
       const NewIteam = this.state.listofIteam.filter(sdf =>{
           return sdf !== a;
       })

       this.setState({
           listofIteam:[...NewIteam]
       })
    }

    render(){
        const label1 = 
        {
            marginTop:"50px"
        }

        const input = 
        {
            padding:"5px",
            border:"solid",
            borderWidth:"1px"
        }

        return(
        <div style={label1}>
        <label>Input</label>
        <br/>
       
        <input type="text" style={input} id="newIteam" placeholder="Insert Text Here"></input>
        <button  onClick={() => {this.handleAdd()}} id="submit" type="submit" style={input}> + </button>
    
        
        <h3>List</h3>
        <ol>
            {
                this.state.listofIteam.map((listofIteam) =>{
                    return <li key= {listofIteam.index} index={listofIteam.index}>{listofIteam.text}  <button onClick={(e) => this.handleDelete(listofIteam)}> - </button></li>
                })
            }  
        </ol>
       
        </div>)
    }
}

export default users