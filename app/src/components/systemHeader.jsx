import React from 'react'; 
import ReactDOM from 'react-dom';
export default class SystemHeader extends React.Component{
	//search
	handlerSearch(){
		let bar = ReactDOM.findDOMNode(this.refs.inputSearch);
		let value = bar.value;
		this.props.searchStaff(value);
	}
	handlerFilter(){
		let orderBar = ReactDOM.findDOMNode(this.refs.filter);
		let value = orderBar.options[orderBar.options.selectedIndex].value;
		this.props.filtStaff(value);
	}
	handlerSort(){
		let orderBar = ReactDOM.findDOMNode(this.refs.order);
		let value = orderBar.options[orderBar.options.selectedIndex].value;
		this.props.sortStaff(value);
	}
	render(){
		return(
			<div>
			<h3 style = {{'textAlign':'center'}}>
				人事管理系统
			</h3>
			<table className = 'header'>
			<tbody>
			   <tr>
			   		<td><input type = 'text' ref = 'inputSearch' onChange = {this.handlerSearch.bind(this)} type = 'text' placeholder = '请输入关键词搜索'/></td>
			   		<td className="headerTd">
                        <label htmlFor ="idSelect">人员筛选</label>
                        <select id='idSelect' ref = 'filter' onChange = {this.handlerFilter.bind(this)}>
                            <option value='0'>全部</option>
                            <option value='1'>主任</option>
                            <option value='2'>老师</option>
                            <option value='3'>学生</option>
                            <option value='4'>实习</option>
                        </select>
                    </td>
                    <td>
						<label htmlFor="orderSelect">排列方式</label>
						<select id='orderSelect' ref = 'order' onChange = {this.handlerSort.bind(this)}>
							<option value='0'>身份</option>
							<option value='1'>年龄升</option>
							<option value='2'>年龄降</option>
						</select>
					</td>	
			   </tr>
			   </tbody>
			   </table>
			</div>
	)
}
}