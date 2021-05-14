import './App.css';
import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Controls from './components/TaskControls';
import TaskList from './components/TaskList';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [], // id : unique, name , status
            filter : {
                name:'',
                status: -1
            },
            isDisplayForm : false,
            itemUpdate : null,
            keyword : '',
            sort : {
                by:'name', // order by name a-z , z-a 
                value:1
            }

        }
    }
    // run 1 lan truoc khi load form lifecycle
    componentWillMount(){
        console.log('willmount');
        if(localStorage && localStorage.getItem('task')){
            this.setState({
                tasks : JSON.parse(localStorage.getItem('task'))
            });
        }
    }
  
    onGenarateData = () => {
        console.log('Genarate data');
        var tasks =[
            {
                id :this.genarateID(),
                name : 'Học lập trình',
                status : true,
            },
            {
                id :this.genarateID(),
                name : 'Developer',
                status : true,
            },
            {
                id :this.genarateID(),
                name : 'Học Math',
                status : false,
            }
        ];
        localStorage.setItem('task',JSON.stringify(tasks));
        this.setState({
            tasks : tasks,
        });
    }

    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }
    genarateID(){
        return this.s4()+ this.s4()+'-'+ this.s4()+'-'+ this.s4()+'-'+ this.s4()+this.s4()+this.s4()+this.s4();
    }
    
    onAdd = () => {
        this.setState({
            isDisplayForm : (this.state.isDisplayForm ? true : !this.state.isDisplayForm),
            itemUpdate : null,
        });

    }
    onShowForm = () => {
        this.setState({
            isDisplayForm : true,
        });
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm : false,
            itemUpdate : null,
        });
    }
    onAddData = (data) => {
        console.log(data);
        var tasks = this.state.tasks;
        // check xem co id chua
        var taskItem = tasks.filter(x=>x.id === data.id);
        if(taskItem.length >0){
            // update
            var index = tasks.indexOf(taskItem[0]);
            if(index != -1){
                tasks[index].name = data.name;
                tasks[index].status = data.status;
            }           
        }else {
            // add
            data.id = this.genarateID();
            tasks.push(data);
        }
        // set lai localStorage
        localStorage.removeItem(tasks);
        localStorage.setItem('task',JSON.stringify(tasks));
        this.setState({
            tasks : tasks,
            itemUpdate : null,
        });
        
    }
    changeStatus = (index,status) => {
        debugger;
        var tasks = this.state.tasks;
        if(index != null && index != undefined){
             // check xem co id chua
        var taskItem = tasks[index];
            if(taskItem){
                taskItem.status = !status;
            }
        }
         // set lai localStorage
         localStorage.removeItem(tasks);
         localStorage.setItem('task',JSON.stringify(tasks));
         this.setState({
             tasks : tasks
         });
    }
    onUpdate = (data) => {
       this.setState({
           itemUpdate:data,
           isDisplayForm : (this.state.isDisplayForm ? true : !this.state.isDisplayForm),
       });
       
    }
    onDelete = (index) => {
        var tasks = this.state.tasks;
        if(index != null && index != undefined){
             // check xem co id chua
        var taskItem = tasks[index];
            if(taskItem){
                tasks.splice(index);
            }
        }
         // set lai localStorage
         localStorage.removeItem(tasks);
         localStorage.setItem('task',JSON.stringify(tasks));
         this.setState({
             tasks : tasks
         });
         this.onCloseForm();
    }
    onFilter = (filterName, filterStatus) => {
        this.setState({
            filter : {
                name : filterName.toLowerCase(),
                status : filterStatus
            }
        });
    }
    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        })
    }
    onSort = (by,value) => {
        this.setState({
            sort : {
                by : by,
                value : value
            }
        })
    }
  render() {
    var { tasks, isDisplayForm, filter , keyword, sort } = this.state;
    if(filter){
        if(filter.name){
            tasks = tasks.filter((tasks) =>{
                return tasks.name.toLowerCase().indexOf(filter.name) !== -1;
            });
        }
        tasks = tasks.filter((tasks) => {
            if(parseInt(filter.status) === -1){
                return tasks;
            }else {
                return tasks.status === (parseInt(filter.status) === 1? true:false);
            }
        });
        if(keyword){
            tasks = tasks.filter((tasks) =>{
                return tasks.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }
        if(sort){
            if(sort.by ==='name'){
                // name
                tasks = tasks.sort((tasks1, tasks2) =>{
                    if(tasks1.name > tasks2.name){
                        return sort.value;
                    }else if(tasks1.name < tasks2.name){
                        return -sort.value;
                    }else return 0;
                });
            }else{
                // status
                tasks = tasks.sort((tasks1, tasks2) =>{
                    if(tasks1.status > tasks2.status){
                        return -sort.value;
                    }else if(tasks1.status < tasks2.status){
                        return sort.value;
                    }else return 0;
                });
            }
        }
    }
    var elementTaskForm = isDisplayForm ? <TaskForm  
        onCloseForm = {this.onCloseForm} 
        onAddData = {this.onAddData}
        data = { this.state.itemUpdate }

    /> :'';
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4':'col-xs-4 col-sm-4 col-md-4 col-lg-4'}>
                {elementTaskForm}
            </div>
            <div className= { isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button type="button" className="btn btn-primary"
                    onClick = { this.onAdd }
                
                >
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <button type="button" className="btn btn-danger ml-5"
                    onClick = { this.onGenarateData }
                >
                
                    Genarate Data
                </button>
                <div className="row mt-15">
                    <Controls 
                        onSearch = {this.onSearch}
                        onSort = {this.onSort}
                        sort = { sort }
                    />
                </div>
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList 
                            tasks = { tasks }
                            changeStatus = { this.changeStatus }
                            UpdateData = { this.onUpdate }
                            onCloseForm = {this.onCloseForm}
                            onOpenForm = {this.onAdd} 
                            onDelete = { this.onDelete}
                            onFilter = { this.onFilter }
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    );
  }
}
export default App;
