import  React from 'react';
import ReactDOM from 'react-dom';
import SystemHeader from './components/systemHeader.jsx';
import SystemItemPanel from './components/systemItemPanel';
import SystemFooter from './components/systemFooter';
import SystemDetail from './components/systemDetail';
import SystemItem from './components/systemItem';
import Staff from './public/staff.js';
	
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			staff : new Staff,
			staffDetail: null
		}
	}
	  //增
    addStaffItem(item){
        this.setState({
            staff: this.state.staff.addSystemItem(item)
        });

    }
    removeStaffItem(key){
	    this.setState({
		    staff: this.state.staff.removeStaffItem(key)
		});
	}

    /*
	 * 搜索
	 */
	searchStaff(word) {
	    this.setState({
		    staff: this.state.staff.searchStaff(word)
		});
	} 
	/*过滤*/
	filtStaff(value){
		this.setState({
			staff: this.state.staff.filtStaff(value)
		})
	}
	detailStaffItem(key){
		this.setState({
			staffDetail: this.state.staff.staff.filter(item =>{
				return item.key == key;
			})[0]
		})
	}
	sortStaff(value){
		this.setState({
			staff: this.state.staff.sortStaff(value)
		})
		console.log(this);
	}
	//关闭
	closeDetail(){
	    this.setState({
		    staffDetail: null
		});
	}
	//编辑
	editDetail(item){
	    this.setState({
		    staff : this.state.staff.editStaffItem(item)
		});
	}
	
   render(){
   		return(
   			<div>
   				  <SystemHeader searchStaff = {this.searchStaff.bind(this)} filtStaff = {this.filtStaff.bind(this)}  sortStaff = {this.sortStaff.bind(this)}/>
			          <SystemItemPanel items={this.state.staff.staff}  removeStaffItem = {this.removeStaffItem.bind(this)} detailStaffItem = {this.detailStaffItem.bind(this)} />
			          <SystemFooter  addStaffItem={this.addStaffItem.bind(this)} />
			          <SystemDetail staffDetail={this.state.staffDetail} editDetail = {this.editDetail.bind(this)} closeDetail = {this.closeDetail.bind(this)} />
   			</div>
   			)
   }	  
}
ReactDOM.render(<App />,document.getElementById('content'))