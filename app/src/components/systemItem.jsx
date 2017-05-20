import React from 'react';
import ReactDOM from 'react-dom'
export default class SystemItem extends React.Component{
	handlerDelete(){
		this.props.removeStaffItem(this.props.item.key);
	}
	handlerDetail(evt){
	    this.props.detailStaffItem(this.props.item.key);
	}
	render(){
		return(
			  <tr>
			  <td>{this.props.item.info.name}</td>
			  <td>{this.props.item.info.age}</td>
			  <td>{this.props.item.info.id}</td>
			  <td>{this.props.item.info.sex}</td>
			  <td>
			  	<a onClick = {this.handlerDelete.bind(this)}>删除</a>
			  	<a onClick = {this.handlerDetail.bind(this)}>详情</a>
			  </td>
			  </tr>
			)
	}
}