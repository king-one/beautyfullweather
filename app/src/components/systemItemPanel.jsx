{/*该组件用来展示父组件传入的item*/}

import React from 'react';
import SystemItem from './systemItem';
export default class SystemPanel extends React.Component{
      render(){
      	let items = [];
        if(this.props.items.length == 0){
      		items.push(<tr>暂无用户</tr>)
      	}
      	else{
      		  this.props.items.forEach((item,key) =>{
      		  	items.push(<SystemItem  key = {key} item = {item} removeStaffItem = {this.props.removeStaffItem} detailStaffItem = {this.props.detailStaffItem}/>)
      		  })
      		}
      	return(
      		<table>
      			<thead>
	      			<tr>
      				    <th>姓名</th>
		      		    <th>年龄</th>
		      		    <th>身份</th>
		      		    <th>性别</th>
		      		    <th>操作</th>
	      			</tr>
      		    </thead>
      		    <tbody>{items}</tbody>
      		</table>
      		)
      }
}