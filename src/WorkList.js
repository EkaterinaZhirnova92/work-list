import { Component } from "react";

class WorkList extends Component {
    constructor() {
        super();

        this.state = {
            field: "",
            workList: []
        }
    }

changeEvent(e) {
this.setState({field: e})
}

addItem(input) {
    if(input == '') {
        alert ('пожалуйста, введите запланированное дело')
    } else{
    let listArray = this.state.workList;
listArray.push(input);
this.setState({workList: listArray, field: ''})
    }
}

lineThrough(event) {
    const li = event.target;
    li.classList.toggle('crossed')
}

deleteItem() {
    let listArray = this.state.workList;
    listArray = [];
    this.setState({workList: listArray})
}

onFormSubmit(e) {
    e.preventDefault()
}

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <input type = "text"
                placeholder="введите дело, которое необходимо сделать"
                onChange = {(event) => {this.changeEvent(event.target.value)}} 
            value = {this.state.field}
            className = "inp"
            />
            <div><button className="green" onClick = {() => this.addItem(this.state.field)}>Добавить</button>
            </div>
            <ul>{this.state.workList.map((item, index) => (
                <li onClick = {this.lineThrough} className="item" key = {index}>☑  {item} <hr/></li>
            ))}</ul>
                <button className = "red" onClick = {() => this.deleteItem()}>Удалить</button>
            </form>
            </div>
        )
    }
}

export default WorkList;